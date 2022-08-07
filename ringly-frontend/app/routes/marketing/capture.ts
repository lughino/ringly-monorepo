import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { gqlSdk } from 'src/client';

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('marketingEmail') as string;
  const id = data.get('ctaId') as string;
  const linkId = data.get('linkId') as string;

  if (!email || !id || !linkId) {
    return json({ error: 'Missing required parameters', ok: false });
  }

  try {
    await gqlSdk.createMarketingData({ email, cta_id: id, link_id: linkId });

    return json({ ok: true });
  } catch (e) {
    console.error(e);
    return json({ error: (e as Error).message, ok: false });
  }
};
