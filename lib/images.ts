/* Images from the original template. Swap any of these URLs (or point to files in /public) later. */
export const PORTRAIT =
  "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";

const G = "https://motionsites.ai/assets/";
export const MARQUEE = [
  "hero-space-voyage-preview-eECLH3Yc", "hero-codenest-preview-Cgppc2qV", "hero-vex-ventures-preview-BczMFIiw",
  "hero-stellar-ai-v2-preview-DjvxjG3C", "hero-asme-preview-B_nGDnTP", "hero-transform-data-preview-Cx5OU29N",
  "hero-vitara-preview-Cjz2QYyU", "hero-terra-preview-BFjrCr7T", "hero-skyelite-preview-DHaZIgUv",
  "hero-aethera-preview-DknSlcTa", "hero-designpro-preview-D8c5_een", "hero-stellar-ai-preview-D3HL6bw1",
  "hero-xportfolio-preview-D4A8maiC", "hero-orbit-web3-preview-BXt4OttD", "hero-nexora-preview-cx5HmUgo",
  "hero-evr-ventures-preview-DZxeVFEX", "hero-planet-orbit-preview-DWAP8Z1P", "hero-new-era-preview-CocuDUm9",
  "hero-wealth-preview-B70idl_u", "hero-luminex-preview-CxOP7ce6", "hero-celestia-preview-0yO3jXO8",
].map((f) => `${G}${f}.gif`);

const P = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_";
const img = (id: string) => `${P}${id}.png&w=1280&q=85`;

/** Three image sets: [left top, left bottom, right tall]. Cards cycle through them. */
export const PROJECT_IMAGES: [string, string, string][] = [
  [img("20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db"), img("20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8"), img("20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327")],
  [img("20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f"), img("20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1"), img("20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea")],
  [img("20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f"), img("20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b"), img("20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee")],
];
