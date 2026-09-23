type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

export const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {}); // Fire-and-forget
};
