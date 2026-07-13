// src/sections/common.ts
import { z } from "zod";
var ctaLinkSchema = z.object({
  label: z.string().max(40),
  to: z.string().max(200)
});
var featureItemSchema = z.object({
  title: z.string().max(80),
  description: z.string().max(300)
});

// src/sections/m1.ts
import { z as z2 } from "zod";
var heroContentSchema = z2.object({
  title: z2.string().max(80),
  subtitle: z2.string().max(160).optional(),
  cta: ctaLinkSchema.optional(),
  image: z2.string().optional()
});
var featuresContentSchema = z2.object({
  title: z2.string().max(80).optional(),
  lead: z2.string().max(200).optional(),
  outro: z2.string().max(200).optional(),
  items: z2.array(featureItemSchema).min(1).max(12)
});
var ctaContentSchema = z2.object({
  title: z2.string().max(80),
  description: z2.string().max(200).optional(),
  button: ctaLinkSchema
});
var featuredCollectionContentSchema = z2.object({
  collectionKey: z2.literal("immobili"),
  mode: z2.enum(["featured", "manual"]),
  itemIds: z2.array(z2.string().uuid()).max(6).optional(),
  limit: z2.number().int().min(1).max(6).default(6),
  title: z2.string().max(80).optional(),
  viewAllLabel: z2.string().max(40).optional(),
  hideWhenEmpty: z2.boolean().default(true)
});

// src/sections/m2.ts
import { z as z3 } from "zod";
var pageHeaderContentSchema = z3.object({
  title: z3.string().max(80),
  lead: z3.string().max(200).optional()
});
var richTextContentSchema = z3.object({
  body: z3.string().max(3e3)
});
var legalPolicyContentSchema = z3.object({
  source: z3.enum(["manual", "iubenda"]),
  iubendaPolicyId: z3.string().max(40).optional(),
  body: z3.string().max(5e4).optional()
});
var splitContentSchema = z3.object({
  title: z3.string().max(80),
  body: z3.string().max(2e3),
  image: z3.string(),
  imageAlt: z3.string().max(120).optional(),
  reverse: z3.boolean().optional()
});
var teamContentSchema = z3.object({
  title: z3.string().max(80).optional(),
  name: z3.string().max(80),
  role: z3.string().max(80),
  bio: z3.string().max(500),
  image: z3.string()
});
var statsContentSchema = z3.object({
  items: z3.array(
    z3.object({
      value: z3.number(),
      suffix: z3.string().max(10).optional(),
      label: z3.string().max(40)
    })
  ).min(1).max(6)
});
var faqContentSchema = z3.object({
  title: z3.string().max(80).optional(),
  items: z3.array(
    z3.object({
      question: z3.string().max(200),
      answer: z3.string().max(1e3)
    })
  ).min(1).max(20)
});
var testimonialsContentSchema = z3.object({
  title: z3.string().max(80).optional(),
  items: z3.array(
    z3.object({
      quote: z3.string().max(500),
      author: z3.string().max(80),
      role: z3.string().max(80).optional()
    })
  ).min(1).max(10)
});

// src/sections/index.ts
var sectionContentByType = {
  hero: heroContentSchema,
  features: featuresContentSchema,
  cta: ctaContentSchema,
  featuredCollection: featuredCollectionContentSchema,
  pageHeader: pageHeaderContentSchema,
  richText: richTextContentSchema,
  legalPolicy: legalPolicyContentSchema,
  split: splitContentSchema,
  team: teamContentSchema,
  stats: statsContentSchema,
  faq: faqContentSchema,
  testimonials: testimonialsContentSchema
};
function parseSectionContent(type, content) {
  const schema = sectionContentByType[type];
  if (!schema) return { success: false, error: `Unknown section type: ${type}` };
  const result = schema.safeParse(content);
  if (!result.success) {
    return { success: false, error: result.error.message };
  }
  return { success: true, data: result.data };
}

// src/settings/contact.ts
import { z as z4 } from "zod";
var dayOfWeekSchema = z4.enum([
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "PublicHolidays"
]);
var openingHoursSchema = z4.object({
  dayOfWeek: dayOfWeekSchema,
  opens: z4.string().regex(/^\d{2}:\d{2}$/),
  closes: z4.string().regex(/^\d{2}:\d{2}$/),
  description: z4.string().max(80).optional()
});
var organizationSchema = z4.object({
  legalName: z4.string().max(120),
  vatNumber: z4.string().max(20).optional(),
  email: z4.string().email().max(320),
  phone: z4.string().max(30),
  address: z4.object({
    street: z4.string().max(120),
    city: z4.string().max(80),
    postalCode: z4.string().max(12),
    country: z4.string().length(2)
  }),
  geo: z4.object({
    latitude: z4.number().min(-90).max(90),
    longitude: z4.number().min(-180).max(180)
  }),
  openingHours: z4.array(openingHoursSchema).min(1).max(14)
});
var contactFormSchema = z4.object({
  enabled: z4.boolean(),
  leadRecipientEmail: z4.string().email().max(320).optional(),
  privacyConsentText: z4.string().max(2e3).optional(),
  labels: z4.object({
    name: z4.string().max(40).optional(),
    email: z4.string().max(40).optional(),
    message: z4.string().max(40).optional()
  }).optional(),
  messages: z4.object({
    success: z4.string().max(200).optional(),
    error: z4.string().max(200).optional()
  }).optional(),
  submitButtonLabel: z4.string().max(30).optional()
}).superRefine((data, ctx) => {
  if (!data.enabled) return;
  const required = [
    "leadRecipientEmail",
    "privacyConsentText",
    "submitButtonLabel"
  ];
  for (const key of required) {
    if (!data[key]) {
      ctx.addIssue({ code: "custom", path: [key], message: "Required when contact form is enabled" });
    }
  }
  if (!data.labels?.name || !data.labels?.email || !data.labels?.message) {
    ctx.addIssue({ code: "custom", path: ["labels"], message: "All labels required when enabled" });
  }
  if (!data.messages?.success || !data.messages?.error) {
    ctx.addIssue({ code: "custom", path: ["messages"], message: "All messages required when enabled" });
  }
});
var contactSettingsSchema = z4.object({
  organization: organizationSchema,
  contactForm: contactFormSchema
});
var settingsScalarsSchema = z4.object({
  themeColor: z4.string().regex(/^#[0-9A-Fa-f]{6}$/),
  backgroundColor: z4.string().regex(/^#[0-9A-Fa-f]{6}$/)
});
var DEFAULT_CONTACT_SETTINGS_IT = {
  organization: {
    legalName: "Norton Tanzarella S.r.l.",
    email: "info@nortontanzarella.it",
    phone: "+39 06 1234 5678",
    address: {
      street: "Via Roma 1",
      city: "Roma",
      postalCode: "00100",
      country: "IT"
    },
    geo: { latitude: 41.9028, longitude: 12.4964 },
    openingHours: [
      { dayOfWeek: "Monday", opens: "09:00", closes: "18:00" },
      { dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
      { dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
      { dayOfWeek: "Thursday", opens: "09:00", closes: "18:00" },
      { dayOfWeek: "Friday", opens: "09:00", closes: "18:00" }
    ]
  },
  contactForm: {
    enabled: true,
    leadRecipientEmail: "info@nortontanzarella.it",
    privacyConsentText: "Ho letto l'informativa privacy e acconsento al trattamento dei dati.",
    labels: { name: "Nome", email: "Email", message: "Messaggio" },
    messages: {
      success: "Messaggio inviato. Ti risponderemo al pi\xF9 presto.",
      error: "Invio non riuscito. Riprova pi\xF9 tardi."
    },
    submitButtonLabel: "Invia messaggio"
  }
};

// src/settings/layout.ts
import { z as z5 } from "zod";
var internalPathSchema = z5.enum([
  "/",
  "/chi-siamo",
  "/immobili",
  "/articoli",
  "/contatti",
  "/privacy-policy",
  "/cookie-policy"
]);
var cmsNavLinkSchema = z5.object({
  label: z5.string().max(40),
  to: z5.union([internalPathSchema, z5.string().url().max(500)]),
  external: z5.boolean().optional()
});
var brandSchema = z5.object({
  name: z5.string().max(60),
  shortName: z5.string().max(20),
  tagline: z5.string().max(120).optional(),
  description: z5.string().max(200).optional()
});
var headerCtaSchema = z5.object({
  label: z5.string().max(30),
  to: internalPathSchema
}).optional();
var footerColumnSchema = z5.object({
  title: z5.string().max(40),
  links: z5.array(cmsNavLinkSchema).min(1).max(8)
});
var footerSchema = z5.object({
  columns: z5.array(footerColumnSchema).min(1).max(4)
});
var socialLinkSchema = z5.object({
  platform: z5.enum(["linkedin", "instagram", "facebook", "x"]),
  url: z5.string().url().max(500)
});
var layoutSettingsSchema = z5.object({
  brand: brandSchema,
  headerNav: z5.array(cmsNavLinkSchema).min(1).max(8),
  headerCta: headerCtaSchema,
  footer: footerSchema,
  legalLinks: z5.array(cmsNavLinkSchema).min(1).max(6),
  social: z5.array(socialLinkSchema).max(6).default([])
});
var DEFAULT_LAYOUT_SETTINGS_IT = {
  brand: {
    name: "Norton Tanzarella",
    shortName: "Norton",
    tagline: "Agenzia immobiliare di prestigio a Roma.",
    description: "Consulenza immobiliare, vendita e affitto di propriet\xE0 selezionate."
  },
  headerNav: [
    { label: "Home", to: "/" },
    { label: "Chi siamo", to: "/chi-siamo" },
    { label: "Immobili", to: "/immobili" },
    { label: "Articoli", to: "/articoli" },
    { label: "Contatti", to: "/contatti" }
  ],
  headerCta: { label: "Contattaci", to: "/contatti" },
  footer: {
    columns: [
      {
        title: "Navigazione",
        links: [
          { label: "Home", to: "/" },
          { label: "Chi siamo", to: "/chi-siamo" },
          { label: "Immobili", to: "/immobili" },
          { label: "Articoli", to: "/articoli" }
        ]
      },
      {
        title: "Legale",
        links: [
          { label: "Privacy policy", to: "/privacy-policy" },
          { label: "Cookie policy", to: "/cookie-policy" }
        ]
      }
    ]
  },
  legalLinks: [
    { label: "Privacy policy", to: "/privacy-policy" },
    { label: "Cookie policy", to: "/cookie-policy" }
  ],
  social: [
    { platform: "linkedin", url: "https://linkedin.com/company/norton-tanzarella" },
    { platform: "instagram", url: "https://instagram.com/norton.tanzarella" }
  ]
};

// src/settings/site.ts
var siteSettingsSchema = contactSettingsSchema.merge(layoutSettingsSchema);
var DEFAULT_SITE_SETTINGS_IT = {
  ...DEFAULT_CONTACT_SETTINGS_IT,
  ...DEFAULT_LAYOUT_SETTINGS_IT
};
function mergeSiteSettingsDefaults(document) {
  const partial = document && typeof document === "object" ? document : {};
  return siteSettingsSchema.parse({
    ...DEFAULT_SITE_SETTINGS_IT,
    ...partial,
    organization: {
      ...DEFAULT_SITE_SETTINGS_IT.organization,
      ...partial.organization
    },
    contactForm: {
      ...DEFAULT_SITE_SETTINGS_IT.contactForm,
      ...partial.contactForm
    },
    brand: {
      ...DEFAULT_SITE_SETTINGS_IT.brand,
      ...partial.brand
    },
    headerNav: partial.headerNav ?? DEFAULT_SITE_SETTINGS_IT.headerNav,
    headerCta: partial.headerCta ?? DEFAULT_SITE_SETTINGS_IT.headerCta,
    footer: partial.footer ?? DEFAULT_SITE_SETTINGS_IT.footer,
    legalLinks: partial.legalLinks ?? DEFAULT_SITE_SETTINGS_IT.legalLinks,
    social: partial.social ?? DEFAULT_SITE_SETTINGS_IT.social
  });
}

// src/pages/document.ts
import { z as z6 } from "zod";
var cmsSeoSchema = z6.object({
  title: z6.string().max(120).optional(),
  description: z6.string().max(320).optional()
});
var cmsSectionSchema = z6.object({
  id: z6.string().uuid(),
  type: z6.string(),
  enabled: z6.boolean(),
  order: z6.number().int().min(0),
  content: z6.record(z6.unknown())
});
var cmsPageDocumentSchema = z6.object({
  seo: cmsSeoSchema.optional(),
  sections: z6.array(cmsSectionSchema)
});

// src/pages/registry.ts
var HOME_DEFAULTS_IT = {
  seo: {
    title: "Norton Tanzarella",
    description: "Agenzia immobiliare a Roma."
  },
  sections: [
    {
      id: "00000000-0000-4000-8000-000000000001",
      type: "hero",
      enabled: true,
      order: 0,
      content: {
        title: "Trova la casa dei tuoi sogni a Roma",
        subtitle: "Consulenza immobiliare personalizzata per acquisto e vendita.",
        cta: { label: "Scopri gli immobili", to: "/immobili" }
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000002",
      type: "features",
      enabled: true,
      order: 1,
      content: {
        title: "Perch\xE9 sceglierci",
        items: [
          { title: "Esperienza locale", description: "Conoscenza approfondita del mercato romano." },
          { title: "Assistenza completa", description: "Dalla valutazione alla firma del rogito." },
          { title: "Trasparenza", description: "Informazioni chiare in ogni fase della trattativa." }
        ]
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000003",
      type: "featuredCollection",
      enabled: true,
      order: 2,
      content: {
        collectionKey: "immobili",
        mode: "featured",
        limit: 6,
        title: "Immobili in evidenza",
        viewAllLabel: "Vedi tutti",
        hideWhenEmpty: true
      }
    },
    {
      id: "00000000-0000-4000-8000-000000000004",
      type: "cta",
      enabled: true,
      order: 3,
      content: {
        title: "Hai bisogno di una valutazione?",
        description: "Contattaci per un appuntamento senza impegno.",
        button: { label: "Contattaci", to: "/contatti" }
      }
    }
  ]
};
var HOME_DEFAULTS_EN = {
  seo: {
    title: "Norton Tanzarella",
    description: "Real estate agency in Rome."
  },
  sections: HOME_DEFAULTS_IT.sections.map((section) => ({ ...section }))
};
var PAGE_REGISTRY = {
  home: {
    allowedTypes: ["hero", "features", "featuredCollection", "cta"],
    reorderable: ["features", "featuredCollection", "cta"],
    defaults: (locale) => locale === "en" ? HOME_DEFAULTS_EN : HOME_DEFAULTS_IT,
    milestone: "M1"
  },
  "chi-siamo": {
    allowedTypes: ["hero", "split", "team", "stats", "cta"],
    reorderable: ["split", "team", "stats", "cta"],
    defaults: (locale) => locale === "en" ? {
      seo: { title: "About us", description: "Norton Tanzarella real estate agency." },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000010",
          type: "hero",
          enabled: true,
          order: 0,
          content: {
            title: "Your trusted partner in Rome",
            subtitle: "Experience, transparency and local knowledge."
          }
        }
      ]
    } : {
      seo: { title: "Chi siamo", description: "Agenzia immobiliare Norton Tanzarella." },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000010",
          type: "hero",
          enabled: true,
          order: 0,
          content: {
            title: "Il tuo partner di fiducia a Roma",
            subtitle: "Esperienza, trasparenza e conoscenza del territorio."
          }
        }
      ]
    },
    milestone: "M2"
  },
  "immobili-index": {
    allowedTypes: ["pageHeader"],
    reorderable: [],
    defaults: (locale) => locale === "en" ? {
      seo: { title: "Properties", description: "Browse our property listings in Rome." },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000050",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: {
            title: "Properties",
            lead: "Find the right home in Rome with Norton Tanzarella."
          }
        }
      ]
    } : {
      seo: { title: "Immobili", description: "Sfoglia gli immobili in vendita a Roma." },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000050",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: {
            title: "Immobili",
            lead: "Trova la casa giusta a Roma con Norton Tanzarella."
          }
        }
      ]
    },
    milestone: "M3"
  },
  "articoli-index": {
    allowedTypes: ["pageHeader"],
    reorderable: [],
    defaults: (locale) => locale === "en" ? {
      seo: { title: "Articles", description: "News and insights from Norton Tanzarella." },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000051",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: {
            title: "Articles",
            lead: "Market updates, guides and stories from our team."
          }
        }
      ]
    } : {
      seo: { title: "Articoli", description: "Notizie e approfondimenti da Norton Tanzarella." },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000051",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: {
            title: "Articoli",
            lead: "Aggiornamenti di mercato, guide e storie dal nostro team."
          }
        }
      ]
    },
    milestone: "M3"
  },
  contatti: {
    allowedTypes: ["pageHeader", "richText"],
    reorderable: [],
    defaults: (locale) => locale === "en" ? {
      seo: { title: "Contact", description: "Get in touch with Norton Tanzarella." },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000020",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: { title: "Contact us", lead: "We are here to help with your property needs." }
        },
        {
          id: "00000000-0000-4000-8000-000000000021",
          type: "richText",
          enabled: true,
          order: 1,
          content: { body: "Write to us for valuations, viewings or general information." }
        }
      ]
    } : {
      seo: { title: "Contatti", description: "Contatta Norton Tanzarella." },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000020",
          type: "pageHeader",
          enabled: true,
          order: 0,
          content: { title: "Contattaci", lead: "Siamo a disposizione per ogni esigenza immobiliare." }
        },
        {
          id: "00000000-0000-4000-8000-000000000021",
          type: "richText",
          enabled: true,
          order: 1,
          content: {
            body: "Scrivici per valutazioni, appuntamenti di visita o informazioni generali."
          }
        }
      ]
    },
    milestone: "M2"
  },
  "privacy-policy": {
    allowedTypes: ["legalPolicy"],
    reorderable: [],
    defaults: (locale) => ({
      seo: { title: locale === "en" ? "Privacy policy" : "Privacy policy" },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000030",
          type: "legalPolicy",
          enabled: true,
          order: 0,
          content: { source: "manual", body: "" }
        }
      ]
    }),
    milestone: "M2"
  },
  "cookie-policy": {
    allowedTypes: ["legalPolicy"],
    reorderable: [],
    defaults: (locale) => ({
      seo: { title: locale === "en" ? "Cookie policy" : "Cookie policy" },
      sections: [
        {
          id: "00000000-0000-4000-8000-000000000040",
          type: "legalPolicy",
          enabled: true,
          order: 0,
          content: { source: "manual", body: "" }
        }
      ]
    }),
    milestone: "M2"
  }
};
var PAGE_KEYS = Object.keys(PAGE_REGISTRY);
function isPageKey(key) {
  return key in PAGE_REGISTRY;
}
function getM1PageKeys() {
  return PAGE_KEYS.filter((key) => PAGE_REGISTRY[key].milestone === "M1");
}
function getM2PageKeys() {
  return PAGE_KEYS.filter((key) => PAGE_REGISTRY[key].milestone === "M2");
}
function getM3PageKeys() {
  return PAGE_KEYS.filter((key) => PAGE_REGISTRY[key].milestone === "M3");
}

// src/field-meta/zodToFieldMeta.ts
import { z as z7 } from "zod";
function humanize(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim();
}
function unwrap(schema) {
  if (schema instanceof z7.ZodOptional || schema instanceof z7.ZodDefault) {
    return unwrap(schema._def.innerType);
  }
  return schema;
}
function getMaxLength(schema) {
  for (const check of schema._def?.checks ?? []) {
    if (check.kind === "max") return check.value;
  }
  return void 0;
}
function zodToFieldMeta(schema, key = "root") {
  const base = unwrap(schema);
  if (base instanceof z7.ZodObject) {
    const shape = base.shape;
    const fields = [];
    for (const [fieldKey, fieldSchema] of Object.entries(shape)) {
      const required = !(fieldSchema instanceof z7.ZodOptional || fieldSchema instanceof z7.ZodDefault);
      const inner = unwrap(fieldSchema);
      if (inner instanceof z7.ZodString) {
        const maxLength = getMaxLength(inner);
        const isUrl = inner._def.checks?.some((c) => c.kind === "url");
        fields.push({
          kind: "string",
          key: fieldKey,
          label: humanize(fieldKey),
          required,
          maxLength,
          multiline: maxLength !== void 0 && maxLength > 200,
          format: isUrl ? "url" : void 0
        });
        continue;
      }
      if (inner instanceof z7.ZodNumber) {
        let min;
        let max;
        for (const check of inner._def.checks ?? []) {
          if (check.kind === "min") min = check.value;
          if (check.kind === "max") max = check.value;
        }
        fields.push({ kind: "number", key: fieldKey, label: humanize(fieldKey), required, min, max });
        continue;
      }
      if (inner instanceof z7.ZodBoolean) {
        fields.push({ kind: "boolean", key: fieldKey, label: humanize(fieldKey), required });
        continue;
      }
      if (inner instanceof z7.ZodEnum) {
        fields.push({
          kind: "enum",
          key: fieldKey,
          label: humanize(fieldKey),
          required,
          options: inner.options.map((value) => ({ value, label: humanize(value) }))
        });
        continue;
      }
      if (inner instanceof z7.ZodLiteral) {
        fields.push({
          kind: "enum",
          key: fieldKey,
          label: humanize(fieldKey),
          required,
          options: [{ value: String(inner.value), label: String(inner.value) }]
        });
        continue;
      }
      if (inner instanceof z7.ZodObject) {
        fields.push({
          kind: "object",
          key: fieldKey,
          label: humanize(fieldKey),
          required,
          fields: zodToFieldMeta(inner, fieldKey)
        });
        continue;
      }
      if (inner instanceof z7.ZodArray) {
        const itemSchema = inner._def.type;
        const itemMeta = zodToFieldMeta(itemSchema, `${fieldKey}Item`)[0];
        const minLength = inner._def.minLength?.value;
        const maxLength = inner._def.maxLength?.value;
        fields.push({
          kind: "array",
          key: fieldKey,
          label: humanize(fieldKey),
          required,
          item: itemMeta ?? {
            kind: "string",
            key: "value",
            label: "Value",
            required: true
          },
          min: minLength,
          max: maxLength
        });
      }
    }
    return fields;
  }
  return [];
}
export {
  DEFAULT_CONTACT_SETTINGS_IT,
  DEFAULT_LAYOUT_SETTINGS_IT,
  DEFAULT_SITE_SETTINGS_IT,
  PAGE_KEYS,
  PAGE_REGISTRY,
  brandSchema,
  cmsNavLinkSchema,
  cmsPageDocumentSchema,
  cmsSectionSchema,
  cmsSeoSchema,
  contactFormSchema,
  contactSettingsSchema,
  ctaContentSchema,
  ctaLinkSchema,
  faqContentSchema,
  featureItemSchema,
  featuredCollectionContentSchema,
  featuresContentSchema,
  footerColumnSchema,
  footerSchema,
  getM1PageKeys,
  getM2PageKeys,
  getM3PageKeys,
  headerCtaSchema,
  heroContentSchema,
  isPageKey,
  layoutSettingsSchema,
  legalPolicyContentSchema,
  mergeSiteSettingsDefaults,
  openingHoursSchema,
  organizationSchema,
  pageHeaderContentSchema,
  parseSectionContent,
  richTextContentSchema,
  sectionContentByType,
  settingsScalarsSchema,
  siteSettingsSchema,
  socialLinkSchema,
  splitContentSchema,
  statsContentSchema,
  teamContentSchema,
  testimonialsContentSchema,
  zodToFieldMeta
};
//# sourceMappingURL=index.js.map