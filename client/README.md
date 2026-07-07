# Hariom High-Tech Client

React + Vite website for Hariom High-Tech Organic Fertilizers.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Inquiry form

The inquiry form is deploy-safe:

- If `VITE_INQUIRY_API_URL` is set, the form posts JSON to that endpoint.
- If `VITE_INQUIRY_API_URL` is empty, the form opens a prepared WhatsApp inquiry message.
- `VITE_WHATSAPP_NUMBER` controls the WhatsApp destination number and defaults to `919763817635`.

Example environment values live in `.env.example`.

Expected API response shape:

```json
{
  "success": true
}
```

If the API responds with `{ "success": false, "message": "..." }` or returns a failed HTTP status, the form shows a WhatsApp fallback link.
