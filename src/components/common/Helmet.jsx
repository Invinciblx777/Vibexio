"use client";

// Head tags are handled by Next.js route-level `metadata` exports (see src/app/*/page.tsx).
// This shim keeps the original react-helmet-async usage inert on the client.
const Helmet = () => null;

export default Helmet;
