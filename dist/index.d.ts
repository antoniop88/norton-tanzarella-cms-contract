import * as zod from 'zod';
import { z, ZodTypeAny } from 'zod';

/** Empty string / null from forms → omitted; otherwise must be a UUID. */
declare const optionalMediaIdSchema: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
declare const ctaLinkSchema: z.ZodObject<{
    label: z.ZodString;
    to: z.ZodString;
}, "strip", z.ZodTypeAny, {
    label: string;
    to: string;
}, {
    label: string;
    to: string;
}>;
/**
 * Optional CTA from backoffice forms: empty object / blank label+to → omitted.
 * Prevents `cta: {}` (JSON drops undefined keys) from failing Required.
 */
declare const optionalCtaLinkSchema: z.ZodEffects<z.ZodOptional<z.ZodObject<{
    label: z.ZodString;
    to: z.ZodString;
}, "strip", z.ZodTypeAny, {
    label: string;
    to: string;
}, {
    label: string;
    to: string;
}>>, {
    label: string;
    to: string;
} | undefined, unknown>;
declare const featureItemSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
}, {
    title: string;
    description: string;
}>;

declare const heroContentSchema: z.ZodObject<{
    title: z.ZodString;
    subtitle: z.ZodOptional<z.ZodString>;
    cta: z.ZodEffects<z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: string;
    }, {
        label: string;
        to: string;
    }>>, {
        label: string;
        to: string;
    } | undefined, unknown>;
}, "strip", z.ZodTypeAny, {
    title: string;
    subtitle?: string | undefined;
    cta?: {
        label: string;
        to: string;
    } | undefined;
}, {
    title: string;
    subtitle?: string | undefined;
    cta?: unknown;
}>;
declare const featuresContentSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    lead: z.ZodOptional<z.ZodString>;
    outro: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        description: string;
    }, {
        title: string;
        description: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        title: string;
        description: string;
    }[];
    title?: string | undefined;
    lead?: string | undefined;
    outro?: string | undefined;
}, {
    items: {
        title: string;
        description: string;
    }[];
    title?: string | undefined;
    lead?: string | undefined;
    outro?: string | undefined;
}>;
declare const ctaContentSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    button: z.ZodObject<{
        label: z.ZodString;
        to: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: string;
    }, {
        label: string;
        to: string;
    }>;
}, "strip", z.ZodTypeAny, {
    title: string;
    button: {
        label: string;
        to: string;
    };
    description?: string | undefined;
}, {
    title: string;
    button: {
        label: string;
        to: string;
    };
    description?: string | undefined;
}>;
declare const featuredCollectionContentSchema: z.ZodObject<{
    collectionKey: z.ZodLiteral<"immobili">;
    mode: z.ZodEnum<["featured", "manual"]>;
    itemIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    limit: z.ZodDefault<z.ZodNumber>;
    title: z.ZodOptional<z.ZodString>;
    viewAllLabel: z.ZodOptional<z.ZodString>;
    hideWhenEmpty: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    collectionKey: "immobili";
    mode: "featured" | "manual";
    limit: number;
    hideWhenEmpty: boolean;
    title?: string | undefined;
    itemIds?: string[] | undefined;
    viewAllLabel?: string | undefined;
}, {
    collectionKey: "immobili";
    mode: "featured" | "manual";
    title?: string | undefined;
    itemIds?: string[] | undefined;
    limit?: number | undefined;
    viewAllLabel?: string | undefined;
    hideWhenEmpty?: boolean | undefined;
}>;
declare const categoryShowcaseItemSchema: z.ZodObject<{
    label: z.ZodString;
    mediaId: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
    imageAlt: z.ZodOptional<z.ZodString>;
    href: z.ZodString;
    ctaLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    label: string;
    href: string;
    mediaId?: string | undefined;
    imageAlt?: string | undefined;
    ctaLabel?: string | undefined;
}, {
    label: string;
    href: string;
    mediaId?: unknown;
    imageAlt?: string | undefined;
    ctaLabel?: string | undefined;
}>;
declare const categoryShowcaseContentSchema: z.ZodObject<{
    title: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        mediaId: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
        imageAlt: z.ZodOptional<z.ZodString>;
        href: z.ZodString;
        ctaLabel: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
        mediaId?: string | undefined;
        imageAlt?: string | undefined;
        ctaLabel?: string | undefined;
    }, {
        label: string;
        href: string;
        mediaId?: unknown;
        imageAlt?: string | undefined;
        ctaLabel?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    title: string;
    items: {
        label: string;
        href: string;
        mediaId?: string | undefined;
        imageAlt?: string | undefined;
        ctaLabel?: string | undefined;
    }[];
}, {
    title: string;
    items: {
        label: string;
        href: string;
        mediaId?: unknown;
        imageAlt?: string | undefined;
        ctaLabel?: string | undefined;
    }[];
}>;
type CategoryShowcaseItem = z.infer<typeof categoryShowcaseItemSchema>;
type CategoryShowcaseContent = z.infer<typeof categoryShowcaseContentSchema>;

declare const pageHeaderContentSchema: z.ZodObject<{
    title: z.ZodString;
    lead: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    lead?: string | undefined;
}, {
    title: string;
    lead?: string | undefined;
}>;
declare const richTextContentSchema: z.ZodObject<{
    body: z.ZodString;
}, "strip", z.ZodTypeAny, {
    body: string;
}, {
    body: string;
}>;
declare const legalPolicyContentSchema: z.ZodObject<{
    source: z.ZodEnum<["manual", "iubenda"]>;
    iubendaPolicyId: z.ZodOptional<z.ZodString>;
    body: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    source: "manual" | "iubenda";
    body?: string | undefined;
    iubendaPolicyId?: string | undefined;
}, {
    source: "manual" | "iubenda";
    body?: string | undefined;
    iubendaPolicyId?: string | undefined;
}>;
declare const splitContentSchema: z.ZodObject<{
    title: z.ZodString;
    body: z.ZodString;
    mediaId: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
    imageAlt: z.ZodOptional<z.ZodString>;
    reverse: z.ZodOptional<z.ZodBoolean>;
    button: z.ZodEffects<z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: string;
    }, {
        label: string;
        to: string;
    }>>, {
        label: string;
        to: string;
    } | undefined, unknown>;
}, "strip", z.ZodTypeAny, {
    title: string;
    body: string;
    reverse?: boolean | undefined;
    button?: {
        label: string;
        to: string;
    } | undefined;
    mediaId?: string | undefined;
    imageAlt?: string | undefined;
}, {
    title: string;
    body: string;
    reverse?: boolean | undefined;
    button?: unknown;
    mediaId?: unknown;
    imageAlt?: string | undefined;
}>;
declare const imageSlideshowItemSchema: z.ZodObject<{
    mediaId: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
    imageAlt: z.ZodOptional<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    mediaId?: string | undefined;
    imageAlt?: string | undefined;
    caption?: string | undefined;
}, {
    mediaId?: unknown;
    imageAlt?: string | undefined;
    caption?: string | undefined;
}>;
declare const imageSlideshowContentSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        mediaId: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
        imageAlt: z.ZodOptional<z.ZodString>;
        caption: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mediaId?: string | undefined;
        imageAlt?: string | undefined;
        caption?: string | undefined;
    }, {
        mediaId?: unknown;
        imageAlt?: string | undefined;
        caption?: string | undefined;
    }>, "many">;
    autoplayMs: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    items: {
        mediaId?: string | undefined;
        imageAlt?: string | undefined;
        caption?: string | undefined;
    }[];
    autoplayMs?: number | undefined;
}, {
    items: {
        mediaId?: unknown;
        imageAlt?: string | undefined;
        caption?: string | undefined;
    }[];
    autoplayMs?: number | undefined;
}>;
type ImageSlideshowItem = z.infer<typeof imageSlideshowItemSchema>;
type ImageSlideshowContent = z.infer<typeof imageSlideshowContentSchema>;
declare const teamContentSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    role: z.ZodString;
    bio: z.ZodString;
    mediaId: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
}, "strip", z.ZodTypeAny, {
    name: string;
    role: string;
    bio: string;
    title?: string | undefined;
    mediaId?: string | undefined;
}, {
    name: string;
    role: string;
    bio: string;
    title?: string | undefined;
    mediaId?: unknown;
}>;
declare const statsContentSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        value: z.ZodNumber;
        suffix: z.ZodOptional<z.ZodString>;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: number;
        label: string;
        suffix?: string | undefined;
    }, {
        value: number;
        label: string;
        suffix?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        value: number;
        label: string;
        suffix?: string | undefined;
    }[];
}, {
    items: {
        value: number;
        label: string;
        suffix?: string | undefined;
    }[];
}>;
declare const faqContentSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        question: z.ZodString;
        answer: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        question: string;
        answer: string;
    }, {
        question: string;
        answer: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        question: string;
        answer: string;
    }[];
    title?: string | undefined;
}, {
    items: {
        question: string;
        answer: string;
    }[];
    title?: string | undefined;
}>;
declare const testimonialsContentSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    items: z.ZodArray<z.ZodObject<{
        quote: z.ZodString;
        author: z.ZodString;
        role: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        quote: string;
        author: string;
        role?: string | undefined;
    }, {
        quote: string;
        author: string;
        role?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        quote: string;
        author: string;
        role?: string | undefined;
    }[];
    title?: string | undefined;
}, {
    items: {
        quote: string;
        author: string;
        role?: string | undefined;
    }[];
    title?: string | undefined;
}>;

declare const cmsSeoSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    description?: string | undefined;
}, {
    title?: string | undefined;
    description?: string | undefined;
}>;
declare const cmsSectionSchema: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodString;
    enabled: z.ZodBoolean;
    order: z.ZodNumber;
    content: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    type: string;
    id: string;
    enabled: boolean;
    order: number;
    content: Record<string, unknown>;
}, {
    type: string;
    id: string;
    enabled: boolean;
    order: number;
    content: Record<string, unknown>;
}>;
declare const cmsPageDocumentSchema: z.ZodObject<{
    seo: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        description?: string | undefined;
    }, {
        title?: string | undefined;
        description?: string | undefined;
    }>>;
    sections: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
        enabled: z.ZodBoolean;
        order: z.ZodNumber;
        content: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
        enabled: boolean;
        order: number;
        content: Record<string, unknown>;
    }, {
        type: string;
        id: string;
        enabled: boolean;
        order: number;
        content: Record<string, unknown>;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    sections: {
        type: string;
        id: string;
        enabled: boolean;
        order: number;
        content: Record<string, unknown>;
    }[];
    seo?: {
        title?: string | undefined;
        description?: string | undefined;
    } | undefined;
}, {
    sections: {
        type: string;
        id: string;
        enabled: boolean;
        order: number;
        content: Record<string, unknown>;
    }[];
    seo?: {
        title?: string | undefined;
        description?: string | undefined;
    } | undefined;
}>;
type CmsPageDocument = z.infer<typeof cmsPageDocumentSchema>;
type CmsSection = z.infer<typeof cmsSectionSchema>;

declare function collectPageMediaIds(document: CmsPageDocument | unknown): string[];

declare const sectionContentByType: {
    readonly hero: zod.ZodObject<{
        title: zod.ZodString;
        subtitle: zod.ZodOptional<zod.ZodString>;
        cta: zod.ZodEffects<zod.ZodOptional<zod.ZodObject<{
            label: zod.ZodString;
            to: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            label: string;
            to: string;
        }, {
            label: string;
            to: string;
        }>>, {
            label: string;
            to: string;
        } | undefined, unknown>;
    }, "strip", zod.ZodTypeAny, {
        title: string;
        subtitle?: string | undefined;
        cta?: {
            label: string;
            to: string;
        } | undefined;
    }, {
        title: string;
        subtitle?: string | undefined;
        cta?: unknown;
    }>;
    readonly features: zod.ZodObject<{
        title: zod.ZodOptional<zod.ZodString>;
        lead: zod.ZodOptional<zod.ZodString>;
        outro: zod.ZodOptional<zod.ZodString>;
        items: zod.ZodArray<zod.ZodObject<{
            title: zod.ZodString;
            description: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            title: string;
            description: string;
        }, {
            title: string;
            description: string;
        }>, "many">;
    }, "strip", zod.ZodTypeAny, {
        items: {
            title: string;
            description: string;
        }[];
        title?: string | undefined;
        lead?: string | undefined;
        outro?: string | undefined;
    }, {
        items: {
            title: string;
            description: string;
        }[];
        title?: string | undefined;
        lead?: string | undefined;
        outro?: string | undefined;
    }>;
    readonly cta: zod.ZodObject<{
        title: zod.ZodString;
        description: zod.ZodOptional<zod.ZodString>;
        button: zod.ZodObject<{
            label: zod.ZodString;
            to: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            label: string;
            to: string;
        }, {
            label: string;
            to: string;
        }>;
    }, "strip", zod.ZodTypeAny, {
        title: string;
        button: {
            label: string;
            to: string;
        };
        description?: string | undefined;
    }, {
        title: string;
        button: {
            label: string;
            to: string;
        };
        description?: string | undefined;
    }>;
    readonly featuredCollection: zod.ZodObject<{
        collectionKey: zod.ZodLiteral<"immobili">;
        mode: zod.ZodEnum<["featured", "manual"]>;
        itemIds: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
        limit: zod.ZodDefault<zod.ZodNumber>;
        title: zod.ZodOptional<zod.ZodString>;
        viewAllLabel: zod.ZodOptional<zod.ZodString>;
        hideWhenEmpty: zod.ZodDefault<zod.ZodBoolean>;
    }, "strip", zod.ZodTypeAny, {
        collectionKey: "immobili";
        mode: "featured" | "manual";
        limit: number;
        hideWhenEmpty: boolean;
        title?: string | undefined;
        itemIds?: string[] | undefined;
        viewAllLabel?: string | undefined;
    }, {
        collectionKey: "immobili";
        mode: "featured" | "manual";
        title?: string | undefined;
        itemIds?: string[] | undefined;
        limit?: number | undefined;
        viewAllLabel?: string | undefined;
        hideWhenEmpty?: boolean | undefined;
    }>;
    readonly categoryShowcase: zod.ZodObject<{
        title: zod.ZodString;
        items: zod.ZodArray<zod.ZodObject<{
            label: zod.ZodString;
            mediaId: zod.ZodEffects<zod.ZodOptional<zod.ZodString>, string | undefined, unknown>;
            imageAlt: zod.ZodOptional<zod.ZodString>;
            href: zod.ZodString;
            ctaLabel: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            label: string;
            href: string;
            mediaId?: string | undefined;
            imageAlt?: string | undefined;
            ctaLabel?: string | undefined;
        }, {
            label: string;
            href: string;
            mediaId?: unknown;
            imageAlt?: string | undefined;
            ctaLabel?: string | undefined;
        }>, "many">;
    }, "strip", zod.ZodTypeAny, {
        title: string;
        items: {
            label: string;
            href: string;
            mediaId?: string | undefined;
            imageAlt?: string | undefined;
            ctaLabel?: string | undefined;
        }[];
    }, {
        title: string;
        items: {
            label: string;
            href: string;
            mediaId?: unknown;
            imageAlt?: string | undefined;
            ctaLabel?: string | undefined;
        }[];
    }>;
    readonly pageHeader: zod.ZodObject<{
        title: zod.ZodString;
        lead: zod.ZodOptional<zod.ZodString>;
    }, "strip", zod.ZodTypeAny, {
        title: string;
        lead?: string | undefined;
    }, {
        title: string;
        lead?: string | undefined;
    }>;
    readonly richText: zod.ZodObject<{
        body: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        body: string;
    }, {
        body: string;
    }>;
    readonly legalPolicy: zod.ZodObject<{
        source: zod.ZodEnum<["manual", "iubenda"]>;
        iubendaPolicyId: zod.ZodOptional<zod.ZodString>;
        body: zod.ZodOptional<zod.ZodString>;
    }, "strip", zod.ZodTypeAny, {
        source: "manual" | "iubenda";
        body?: string | undefined;
        iubendaPolicyId?: string | undefined;
    }, {
        source: "manual" | "iubenda";
        body?: string | undefined;
        iubendaPolicyId?: string | undefined;
    }>;
    readonly split: zod.ZodObject<{
        title: zod.ZodString;
        body: zod.ZodString;
        mediaId: zod.ZodEffects<zod.ZodOptional<zod.ZodString>, string | undefined, unknown>;
        imageAlt: zod.ZodOptional<zod.ZodString>;
        reverse: zod.ZodOptional<zod.ZodBoolean>;
        button: zod.ZodEffects<zod.ZodOptional<zod.ZodObject<{
            label: zod.ZodString;
            to: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            label: string;
            to: string;
        }, {
            label: string;
            to: string;
        }>>, {
            label: string;
            to: string;
        } | undefined, unknown>;
    }, "strip", zod.ZodTypeAny, {
        title: string;
        body: string;
        reverse?: boolean | undefined;
        button?: {
            label: string;
            to: string;
        } | undefined;
        mediaId?: string | undefined;
        imageAlt?: string | undefined;
    }, {
        title: string;
        body: string;
        reverse?: boolean | undefined;
        button?: unknown;
        mediaId?: unknown;
        imageAlt?: string | undefined;
    }>;
    readonly imageSlideshow: zod.ZodObject<{
        items: zod.ZodArray<zod.ZodObject<{
            mediaId: zod.ZodEffects<zod.ZodOptional<zod.ZodString>, string | undefined, unknown>;
            imageAlt: zod.ZodOptional<zod.ZodString>;
            caption: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            mediaId?: string | undefined;
            imageAlt?: string | undefined;
            caption?: string | undefined;
        }, {
            mediaId?: unknown;
            imageAlt?: string | undefined;
            caption?: string | undefined;
        }>, "many">;
        autoplayMs: zod.ZodOptional<zod.ZodNumber>;
    }, "strip", zod.ZodTypeAny, {
        items: {
            mediaId?: string | undefined;
            imageAlt?: string | undefined;
            caption?: string | undefined;
        }[];
        autoplayMs?: number | undefined;
    }, {
        items: {
            mediaId?: unknown;
            imageAlt?: string | undefined;
            caption?: string | undefined;
        }[];
        autoplayMs?: number | undefined;
    }>;
    readonly team: zod.ZodObject<{
        title: zod.ZodOptional<zod.ZodString>;
        name: zod.ZodString;
        role: zod.ZodString;
        bio: zod.ZodString;
        mediaId: zod.ZodEffects<zod.ZodOptional<zod.ZodString>, string | undefined, unknown>;
    }, "strip", zod.ZodTypeAny, {
        name: string;
        role: string;
        bio: string;
        title?: string | undefined;
        mediaId?: string | undefined;
    }, {
        name: string;
        role: string;
        bio: string;
        title?: string | undefined;
        mediaId?: unknown;
    }>;
    readonly stats: zod.ZodObject<{
        items: zod.ZodArray<zod.ZodObject<{
            value: zod.ZodNumber;
            suffix: zod.ZodOptional<zod.ZodString>;
            label: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            value: number;
            label: string;
            suffix?: string | undefined;
        }, {
            value: number;
            label: string;
            suffix?: string | undefined;
        }>, "many">;
    }, "strip", zod.ZodTypeAny, {
        items: {
            value: number;
            label: string;
            suffix?: string | undefined;
        }[];
    }, {
        items: {
            value: number;
            label: string;
            suffix?: string | undefined;
        }[];
    }>;
    readonly faq: zod.ZodObject<{
        title: zod.ZodOptional<zod.ZodString>;
        items: zod.ZodArray<zod.ZodObject<{
            question: zod.ZodString;
            answer: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            question: string;
            answer: string;
        }, {
            question: string;
            answer: string;
        }>, "many">;
    }, "strip", zod.ZodTypeAny, {
        items: {
            question: string;
            answer: string;
        }[];
        title?: string | undefined;
    }, {
        items: {
            question: string;
            answer: string;
        }[];
        title?: string | undefined;
    }>;
    readonly testimonials: zod.ZodObject<{
        title: zod.ZodOptional<zod.ZodString>;
        items: zod.ZodArray<zod.ZodObject<{
            quote: zod.ZodString;
            author: zod.ZodString;
            role: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            quote: string;
            author: string;
            role?: string | undefined;
        }, {
            quote: string;
            author: string;
            role?: string | undefined;
        }>, "many">;
    }, "strip", zod.ZodTypeAny, {
        items: {
            quote: string;
            author: string;
            role?: string | undefined;
        }[];
        title?: string | undefined;
    }, {
        items: {
            quote: string;
            author: string;
            role?: string | undefined;
        }[];
        title?: string | undefined;
    }>;
};
type SectionType = keyof typeof sectionContentByType;
declare const SECTION_TYPE_LABELS_IT: Record<SectionType, string>;
declare function parseSectionContent(type: string, content: unknown): {
    success: false;
    error: string;
    data?: undefined;
} | {
    success: true;
    data: {
        title: string;
        subtitle?: string | undefined;
        cta?: {
            label: string;
            to: string;
        } | undefined;
    } | {
        items: {
            title: string;
            description: string;
        }[];
        title?: string | undefined;
        lead?: string | undefined;
        outro?: string | undefined;
    } | {
        title: string;
        button: {
            label: string;
            to: string;
        };
        description?: string | undefined;
    } | {
        collectionKey: "immobili";
        mode: "featured" | "manual";
        limit: number;
        hideWhenEmpty: boolean;
        title?: string | undefined;
        itemIds?: string[] | undefined;
        viewAllLabel?: string | undefined;
    } | {
        title: string;
        items: {
            label: string;
            href: string;
            mediaId?: string | undefined;
            imageAlt?: string | undefined;
            ctaLabel?: string | undefined;
        }[];
    } | {
        title: string;
        lead?: string | undefined;
    } | {
        body: string;
    } | {
        source: "manual" | "iubenda";
        body?: string | undefined;
        iubendaPolicyId?: string | undefined;
    } | {
        items: {
            mediaId?: string | undefined;
            imageAlt?: string | undefined;
            caption?: string | undefined;
        }[];
        autoplayMs?: number | undefined;
    } | {
        name: string;
        role: string;
        bio: string;
        title?: string | undefined;
        mediaId?: string | undefined;
    } | {
        items: {
            value: number;
            label: string;
            suffix?: string | undefined;
        }[];
    } | {
        items: {
            question: string;
            answer: string;
        }[];
        title?: string | undefined;
    } | {
        items: {
            quote: string;
            author: string;
            role?: string | undefined;
        }[];
        title?: string | undefined;
    };
    error?: undefined;
};

declare const dayOfWeekSchema: z.ZodEnum<["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "PublicHolidays"]>;
declare const openingHoursSchema: z.ZodObject<{
    dayOfWeek: z.ZodEnum<["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "PublicHolidays"]>;
    opens: z.ZodString;
    closes: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
    opens: string;
    closes: string;
    description?: string | undefined;
}, {
    dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
    opens: string;
    closes: string;
    description?: string | undefined;
}>;
type OpeningHoursEntry = z.infer<typeof openingHoursSchema>;
type DayOfWeek = OpeningHoursEntry['dayOfWeek'];
type TimeSlot = {
    opens: string;
    closes: string;
};
type DaySchedule = {
    dayOfWeek: DayOfWeek;
    closed: boolean;
    slots: TimeSlot[];
    description?: string;
};
declare const WEEKDAY_ORDER: readonly ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
declare const EDITOR_DAY_ORDER: readonly ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "PublicHolidays"];
declare function groupOpeningHoursByDay(entries: OpeningHoursEntry[]): DaySchedule[];
declare function flattenDaySchedules(schedules: DaySchedule[]): OpeningHoursEntry[];
type DayScheduleGroup = {
    days: DayOfWeek[];
    startDay: DayOfWeek;
    endDay: DayOfWeek;
    closed: boolean;
    slots: TimeSlot[];
    description?: string;
};
/**
 * Merge CONSECUTIVE weekdays (in WEEKDAY_ORDER) that share the same signature
 * (both closed, or identical slots + note) into a single range group.
 * PublicHolidays are excluded — handle them separately.
 */
declare function groupConsecutiveSchedules(schedules: DaySchedule[]): DayScheduleGroup[];
/**
 * Return `sourceHours` (days + times) but carrying over each locale-specific
 * note (`description`) already present in `targetHours`, aligned by
 * (dayOfWeek, ordinal position within the day). Source notes are dropped.
 * Used to keep opening hours shared across locales while notes stay per-locale.
 */
declare function mergeOpeningHoursNotes(sourceHours: OpeningHoursEntry[], targetHours: OpeningHoursEntry[]): OpeningHoursEntry[];
type OpeningHoursValidationIssue = {
    path: (string | number)[];
    message: string;
};
declare function validateOpeningHours(entries: OpeningHoursEntry[]): OpeningHoursValidationIssue[];
declare const DEFAULT_OPENING_HOURS_IT: OpeningHoursEntry[];

declare const hexColorSchema: z.ZodString;
declare const FONT_SANS_WHITELIST: readonly ["Nunito Sans", "Inter", "DM Sans"];
declare const FONT_HEADING_WHITELIST: readonly ["Playfair Display", "Libre Baskerville", "Source Serif 4"];
declare const FONT_WHITELIST: readonly ["Nunito Sans", "Inter", "DM Sans", "Playfair Display", "Libre Baskerville", "Source Serif 4"];
type FontSans = (typeof FONT_SANS_WHITELIST)[number];
type FontHeading = (typeof FONT_HEADING_WHITELIST)[number];
declare const LOGO_SLOTS: readonly ["siteHeader", "siteFooter", "siteFavicon", "backofficeLogin", "backofficeSidebar", "backofficeSidebarCollapsed"];
type LogoSlot = (typeof LOGO_SLOTS)[number];
declare const logoAltSchema: z.ZodObject<{
    it: z.ZodOptional<z.ZodString>;
    en: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    it?: string | undefined;
    en?: string | undefined;
}, {
    it?: string | undefined;
    en?: string | undefined;
}>;
declare const logoSlotSchema: z.ZodObject<{
    mediaId: z.ZodOptional<z.ZodString>;
    mediaIdLight: z.ZodOptional<z.ZodString>;
    mediaIdDark: z.ZodOptional<z.ZodString>;
    alt: z.ZodOptional<z.ZodObject<{
        it: z.ZodOptional<z.ZodString>;
        en: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        it?: string | undefined;
        en?: string | undefined;
    }, {
        it?: string | undefined;
        en?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    mediaId?: string | undefined;
    mediaIdLight?: string | undefined;
    mediaIdDark?: string | undefined;
    alt?: {
        it?: string | undefined;
        en?: string | undefined;
    } | undefined;
}, {
    mediaId?: string | undefined;
    mediaIdLight?: string | undefined;
    mediaIdDark?: string | undefined;
    alt?: {
        it?: string | undefined;
        en?: string | undefined;
    } | undefined;
}>;
type LogoSlotConfig = z.infer<typeof logoSlotSchema>;
declare const brandingColorsSchema: z.ZodObject<{
    primary: z.ZodString;
    secondary: z.ZodString;
    accent: z.ZodString;
    background: z.ZodString;
    foreground: z.ZodString;
    success: z.ZodString;
    warning: z.ZodString;
    error: z.ZodString;
}, "strip", z.ZodTypeAny, {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    success: string;
    warning: string;
    error: string;
}, {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    success: string;
    warning: string;
    error: string;
}>;
type BrandingColors = z.infer<typeof brandingColorsSchema>;
declare const brandingTypographySchema: z.ZodObject<{
    fontSans: z.ZodEnum<["Nunito Sans", "Inter", "DM Sans"]>;
    fontHeading: z.ZodEnum<["Playfair Display", "Libre Baskerville", "Source Serif 4"]>;
}, "strip", z.ZodTypeAny, {
    fontSans: "Nunito Sans" | "Inter" | "DM Sans";
    fontHeading: "Playfair Display" | "Libre Baskerville" | "Source Serif 4";
}, {
    fontSans: "Nunito Sans" | "Inter" | "DM Sans";
    fontHeading: "Playfair Display" | "Libre Baskerville" | "Source Serif 4";
}>;
type BrandingTypography = z.infer<typeof brandingTypographySchema>;
declare const brandingLogosSchema: z.ZodObject<{
    siteHeader: z.ZodOptional<z.ZodObject<{
        mediaId: z.ZodOptional<z.ZodString>;
        mediaIdLight: z.ZodOptional<z.ZodString>;
        mediaIdDark: z.ZodOptional<z.ZodString>;
        alt: z.ZodOptional<z.ZodObject<{
            it: z.ZodOptional<z.ZodString>;
            en: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            it?: string | undefined;
            en?: string | undefined;
        }, {
            it?: string | undefined;
            en?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    }, {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    }>>;
    siteFooter: z.ZodOptional<z.ZodObject<{
        mediaId: z.ZodOptional<z.ZodString>;
        mediaIdLight: z.ZodOptional<z.ZodString>;
        mediaIdDark: z.ZodOptional<z.ZodString>;
        alt: z.ZodOptional<z.ZodObject<{
            it: z.ZodOptional<z.ZodString>;
            en: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            it?: string | undefined;
            en?: string | undefined;
        }, {
            it?: string | undefined;
            en?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    }, {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    }>>;
    siteFavicon: z.ZodOptional<z.ZodObject<{
        mediaId: z.ZodOptional<z.ZodString>;
        mediaIdLight: z.ZodOptional<z.ZodString>;
        mediaIdDark: z.ZodOptional<z.ZodString>;
        alt: z.ZodOptional<z.ZodObject<{
            it: z.ZodOptional<z.ZodString>;
            en: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            it?: string | undefined;
            en?: string | undefined;
        }, {
            it?: string | undefined;
            en?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    }, {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    }>>;
    backofficeLogin: z.ZodOptional<z.ZodObject<{
        mediaId: z.ZodOptional<z.ZodString>;
        mediaIdLight: z.ZodOptional<z.ZodString>;
        mediaIdDark: z.ZodOptional<z.ZodString>;
        alt: z.ZodOptional<z.ZodObject<{
            it: z.ZodOptional<z.ZodString>;
            en: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            it?: string | undefined;
            en?: string | undefined;
        }, {
            it?: string | undefined;
            en?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    }, {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    }>>;
    backofficeSidebar: z.ZodOptional<z.ZodObject<{
        mediaId: z.ZodOptional<z.ZodString>;
        mediaIdLight: z.ZodOptional<z.ZodString>;
        mediaIdDark: z.ZodOptional<z.ZodString>;
        alt: z.ZodOptional<z.ZodObject<{
            it: z.ZodOptional<z.ZodString>;
            en: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            it?: string | undefined;
            en?: string | undefined;
        }, {
            it?: string | undefined;
            en?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    }, {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    }>>;
    backofficeSidebarCollapsed: z.ZodOptional<z.ZodObject<{
        mediaId: z.ZodOptional<z.ZodString>;
        mediaIdLight: z.ZodOptional<z.ZodString>;
        mediaIdDark: z.ZodOptional<z.ZodString>;
        alt: z.ZodOptional<z.ZodObject<{
            it: z.ZodOptional<z.ZodString>;
            en: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            it?: string | undefined;
            en?: string | undefined;
        }, {
            it?: string | undefined;
            en?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    }, {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    siteHeader?: {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    } | undefined;
    siteFooter?: {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    } | undefined;
    siteFavicon?: {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    } | undefined;
    backofficeLogin?: {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    } | undefined;
    backofficeSidebar?: {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    } | undefined;
    backofficeSidebarCollapsed?: {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    } | undefined;
}, {
    siteHeader?: {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    } | undefined;
    siteFooter?: {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    } | undefined;
    siteFavicon?: {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    } | undefined;
    backofficeLogin?: {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    } | undefined;
    backofficeSidebar?: {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    } | undefined;
    backofficeSidebarCollapsed?: {
        mediaId?: string | undefined;
        mediaIdLight?: string | undefined;
        mediaIdDark?: string | undefined;
        alt?: {
            it?: string | undefined;
            en?: string | undefined;
        } | undefined;
    } | undefined;
}>;
type BrandingLogos = z.infer<typeof brandingLogosSchema>;
declare const DEFAULT_BRANDING_COLORS: BrandingColors;
declare const DEFAULT_BRANDING_TYPOGRAPHY: BrandingTypography;
declare const DEFAULT_BRANDING_SCALARS: {
    themeColor: string;
    backgroundColor: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        foreground: string;
        success: string;
        warning: string;
        error: string;
    };
    typography: {
        fontSans: "Nunito Sans" | "Inter" | "DM Sans";
        fontHeading: "Playfair Display" | "Libre Baskerville" | "Source Serif 4";
    };
    logos: BrandingLogos;
};
/**
 * Full branding scalars stored on cms_settings.scalars.
 * `themeColor` / `backgroundColor` stay for webmanifest / meta compat
 * and are kept in sync with colors.primary / colors.background on write.
 */
declare const settingsScalarsSchema: z.ZodEffects<z.ZodObject<{
    themeColor: z.ZodString;
    backgroundColor: z.ZodString;
    colors: z.ZodObject<{
        primary: z.ZodString;
        secondary: z.ZodString;
        accent: z.ZodString;
        background: z.ZodString;
        foreground: z.ZodString;
        success: z.ZodString;
        warning: z.ZodString;
        error: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        foreground: string;
        success: string;
        warning: string;
        error: string;
    }, {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        foreground: string;
        success: string;
        warning: string;
        error: string;
    }>;
    typography: z.ZodObject<{
        fontSans: z.ZodEnum<["Nunito Sans", "Inter", "DM Sans"]>;
        fontHeading: z.ZodEnum<["Playfair Display", "Libre Baskerville", "Source Serif 4"]>;
    }, "strip", z.ZodTypeAny, {
        fontSans: "Nunito Sans" | "Inter" | "DM Sans";
        fontHeading: "Playfair Display" | "Libre Baskerville" | "Source Serif 4";
    }, {
        fontSans: "Nunito Sans" | "Inter" | "DM Sans";
        fontHeading: "Playfair Display" | "Libre Baskerville" | "Source Serif 4";
    }>;
    logos: z.ZodDefault<z.ZodObject<{
        siteHeader: z.ZodOptional<z.ZodObject<{
            mediaId: z.ZodOptional<z.ZodString>;
            mediaIdLight: z.ZodOptional<z.ZodString>;
            mediaIdDark: z.ZodOptional<z.ZodString>;
            alt: z.ZodOptional<z.ZodObject<{
                it: z.ZodOptional<z.ZodString>;
                en: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                it?: string | undefined;
                en?: string | undefined;
            }, {
                it?: string | undefined;
                en?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        }, {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        }>>;
        siteFooter: z.ZodOptional<z.ZodObject<{
            mediaId: z.ZodOptional<z.ZodString>;
            mediaIdLight: z.ZodOptional<z.ZodString>;
            mediaIdDark: z.ZodOptional<z.ZodString>;
            alt: z.ZodOptional<z.ZodObject<{
                it: z.ZodOptional<z.ZodString>;
                en: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                it?: string | undefined;
                en?: string | undefined;
            }, {
                it?: string | undefined;
                en?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        }, {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        }>>;
        siteFavicon: z.ZodOptional<z.ZodObject<{
            mediaId: z.ZodOptional<z.ZodString>;
            mediaIdLight: z.ZodOptional<z.ZodString>;
            mediaIdDark: z.ZodOptional<z.ZodString>;
            alt: z.ZodOptional<z.ZodObject<{
                it: z.ZodOptional<z.ZodString>;
                en: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                it?: string | undefined;
                en?: string | undefined;
            }, {
                it?: string | undefined;
                en?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        }, {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        }>>;
        backofficeLogin: z.ZodOptional<z.ZodObject<{
            mediaId: z.ZodOptional<z.ZodString>;
            mediaIdLight: z.ZodOptional<z.ZodString>;
            mediaIdDark: z.ZodOptional<z.ZodString>;
            alt: z.ZodOptional<z.ZodObject<{
                it: z.ZodOptional<z.ZodString>;
                en: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                it?: string | undefined;
                en?: string | undefined;
            }, {
                it?: string | undefined;
                en?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        }, {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        }>>;
        backofficeSidebar: z.ZodOptional<z.ZodObject<{
            mediaId: z.ZodOptional<z.ZodString>;
            mediaIdLight: z.ZodOptional<z.ZodString>;
            mediaIdDark: z.ZodOptional<z.ZodString>;
            alt: z.ZodOptional<z.ZodObject<{
                it: z.ZodOptional<z.ZodString>;
                en: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                it?: string | undefined;
                en?: string | undefined;
            }, {
                it?: string | undefined;
                en?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        }, {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        }>>;
        backofficeSidebarCollapsed: z.ZodOptional<z.ZodObject<{
            mediaId: z.ZodOptional<z.ZodString>;
            mediaIdLight: z.ZodOptional<z.ZodString>;
            mediaIdDark: z.ZodOptional<z.ZodString>;
            alt: z.ZodOptional<z.ZodObject<{
                it: z.ZodOptional<z.ZodString>;
                en: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                it?: string | undefined;
                en?: string | undefined;
            }, {
                it?: string | undefined;
                en?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        }, {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        siteHeader?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        siteFooter?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        siteFavicon?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeLogin?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeSidebar?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeSidebarCollapsed?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
    }, {
        siteHeader?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        siteFooter?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        siteFavicon?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeLogin?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeSidebar?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeSidebarCollapsed?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    themeColor: string;
    backgroundColor: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        foreground: string;
        success: string;
        warning: string;
        error: string;
    };
    typography: {
        fontSans: "Nunito Sans" | "Inter" | "DM Sans";
        fontHeading: "Playfair Display" | "Libre Baskerville" | "Source Serif 4";
    };
    logos: {
        siteHeader?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        siteFooter?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        siteFavicon?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeLogin?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeSidebar?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeSidebarCollapsed?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
    };
}, {
    themeColor: string;
    backgroundColor: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        foreground: string;
        success: string;
        warning: string;
        error: string;
    };
    typography: {
        fontSans: "Nunito Sans" | "Inter" | "DM Sans";
        fontHeading: "Playfair Display" | "Libre Baskerville" | "Source Serif 4";
    };
    logos?: {
        siteHeader?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        siteFooter?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        siteFavicon?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeLogin?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeSidebar?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeSidebarCollapsed?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}>, {
    themeColor: string;
    backgroundColor: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        foreground: string;
        success: string;
        warning: string;
        error: string;
    };
    typography: {
        fontSans: "Nunito Sans" | "Inter" | "DM Sans";
        fontHeading: "Playfair Display" | "Libre Baskerville" | "Source Serif 4";
    };
    logos: {
        siteHeader?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        siteFooter?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        siteFavicon?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeLogin?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeSidebar?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeSidebarCollapsed?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
    };
}, {
    themeColor: string;
    backgroundColor: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        foreground: string;
        success: string;
        warning: string;
        error: string;
    };
    typography: {
        fontSans: "Nunito Sans" | "Inter" | "DM Sans";
        fontHeading: "Playfair Display" | "Libre Baskerville" | "Source Serif 4";
    };
    logos?: {
        siteHeader?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        siteFooter?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        siteFavicon?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeLogin?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeSidebar?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
        backofficeSidebarCollapsed?: {
            mediaId?: string | undefined;
            mediaIdLight?: string | undefined;
            mediaIdDark?: string | undefined;
            alt?: {
                it?: string | undefined;
                en?: string | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
}>;
type SettingsScalars = z.infer<typeof settingsScalarsSchema>;
/** Deep-merge unknown/partial DB JSON into a valid SettingsScalars. */
declare function normalizeSettingsScalars(raw: unknown): SettingsScalars;
/** Map branding scalars to CSS custom properties for :root injection. */
declare function scalarsToCssVars(scalars: SettingsScalars): Record<string, string>;
declare function cssVarsToStyleText(vars: Record<string, string>): string;
/** Collect all media UUIDs referenced by logo slots. */
declare function collectLogoMediaIds(logos: BrandingLogos | undefined): string[];

declare const organizationSchema: z.ZodEffects<z.ZodObject<{
    legalName: z.ZodString;
    vatNumber: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    phone: z.ZodString;
    address: z.ZodObject<{
        street: z.ZodString;
        city: z.ZodString;
        postalCode: z.ZodString;
        country: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    }, {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    }>;
    geo: z.ZodObject<{
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        latitude: number;
        longitude: number;
    }, {
        latitude: number;
        longitude: number;
    }>;
    mapUrl: z.ZodOptional<z.ZodString>;
    openingHours: z.ZodArray<z.ZodObject<{
        dayOfWeek: z.ZodEnum<["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "PublicHolidays"]>;
        opens: z.ZodString;
        closes: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
        opens: string;
        closes: string;
        description?: string | undefined;
    }, {
        dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
        opens: string;
        closes: string;
        description?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    openingHours: {
        dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
        opens: string;
        closes: string;
        description?: string | undefined;
    }[];
    legalName: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    geo: {
        latitude: number;
        longitude: number;
    };
    vatNumber?: string | undefined;
    mapUrl?: string | undefined;
}, {
    openingHours: {
        dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
        opens: string;
        closes: string;
        description?: string | undefined;
    }[];
    legalName: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    geo: {
        latitude: number;
        longitude: number;
    };
    vatNumber?: string | undefined;
    mapUrl?: string | undefined;
}>, {
    openingHours: {
        dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
        opens: string;
        closes: string;
        description?: string | undefined;
    }[];
    legalName: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    geo: {
        latitude: number;
        longitude: number;
    };
    vatNumber?: string | undefined;
    mapUrl?: string | undefined;
}, {
    openingHours: {
        dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
        opens: string;
        closes: string;
        description?: string | undefined;
    }[];
    legalName: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    geo: {
        latitude: number;
        longitude: number;
    };
    vatNumber?: string | undefined;
    mapUrl?: string | undefined;
}>;
declare const contactFormSchema: z.ZodEffects<z.ZodObject<{
    enabled: z.ZodBoolean;
    leadRecipientEmail: z.ZodOptional<z.ZodString>;
    privacyConsentText: z.ZodOptional<z.ZodString>;
    privacyPolicyUrl: z.ZodOptional<z.ZodString>;
    marketingConsentEnabled: z.ZodBoolean;
    marketingConsentText: z.ZodOptional<z.ZodString>;
    phoneFieldEnabled: z.ZodBoolean;
    phoneRequired: z.ZodBoolean;
    subjectFieldEnabled: z.ZodBoolean;
    subjectOptions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    labels: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        subject: z.ZodOptional<z.ZodString>;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        message?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        subject?: string | undefined;
    }, {
        message?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        subject?: string | undefined;
    }>>;
    messages: z.ZodOptional<z.ZodObject<{
        success: z.ZodOptional<z.ZodString>;
        error: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        success?: string | undefined;
        error?: string | undefined;
    }, {
        success?: string | undefined;
        error?: string | undefined;
    }>>;
    submitButtonLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    marketingConsentEnabled: boolean;
    phoneFieldEnabled: boolean;
    phoneRequired: boolean;
    subjectFieldEnabled: boolean;
    leadRecipientEmail?: string | undefined;
    privacyConsentText?: string | undefined;
    privacyPolicyUrl?: string | undefined;
    marketingConsentText?: string | undefined;
    subjectOptions?: {
        value: string;
    }[] | undefined;
    labels?: {
        message?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        subject?: string | undefined;
    } | undefined;
    messages?: {
        success?: string | undefined;
        error?: string | undefined;
    } | undefined;
    submitButtonLabel?: string | undefined;
}, {
    enabled: boolean;
    marketingConsentEnabled: boolean;
    phoneFieldEnabled: boolean;
    phoneRequired: boolean;
    subjectFieldEnabled: boolean;
    leadRecipientEmail?: string | undefined;
    privacyConsentText?: string | undefined;
    privacyPolicyUrl?: string | undefined;
    marketingConsentText?: string | undefined;
    subjectOptions?: {
        value: string;
    }[] | undefined;
    labels?: {
        message?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        subject?: string | undefined;
    } | undefined;
    messages?: {
        success?: string | undefined;
        error?: string | undefined;
    } | undefined;
    submitButtonLabel?: string | undefined;
}>, {
    enabled: boolean;
    marketingConsentEnabled: boolean;
    phoneFieldEnabled: boolean;
    phoneRequired: boolean;
    subjectFieldEnabled: boolean;
    leadRecipientEmail?: string | undefined;
    privacyConsentText?: string | undefined;
    privacyPolicyUrl?: string | undefined;
    marketingConsentText?: string | undefined;
    subjectOptions?: {
        value: string;
    }[] | undefined;
    labels?: {
        message?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        subject?: string | undefined;
    } | undefined;
    messages?: {
        success?: string | undefined;
        error?: string | undefined;
    } | undefined;
    submitButtonLabel?: string | undefined;
}, {
    enabled: boolean;
    marketingConsentEnabled: boolean;
    phoneFieldEnabled: boolean;
    phoneRequired: boolean;
    subjectFieldEnabled: boolean;
    leadRecipientEmail?: string | undefined;
    privacyConsentText?: string | undefined;
    privacyPolicyUrl?: string | undefined;
    marketingConsentText?: string | undefined;
    subjectOptions?: {
        value: string;
    }[] | undefined;
    labels?: {
        message?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        subject?: string | undefined;
    } | undefined;
    messages?: {
        success?: string | undefined;
        error?: string | undefined;
    } | undefined;
    submitButtonLabel?: string | undefined;
}>;
declare const contactSettingsSchema: z.ZodObject<{
    organization: z.ZodEffects<z.ZodObject<{
        legalName: z.ZodString;
        vatNumber: z.ZodOptional<z.ZodString>;
        email: z.ZodString;
        phone: z.ZodString;
        address: z.ZodObject<{
            street: z.ZodString;
            city: z.ZodString;
            postalCode: z.ZodString;
            country: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        }, {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        }>;
        geo: z.ZodObject<{
            latitude: z.ZodNumber;
            longitude: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            latitude: number;
            longitude: number;
        }, {
            latitude: number;
            longitude: number;
        }>;
        mapUrl: z.ZodOptional<z.ZodString>;
        openingHours: z.ZodArray<z.ZodObject<{
            dayOfWeek: z.ZodEnum<["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "PublicHolidays"]>;
            opens: z.ZodString;
            closes: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }, {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        legalName: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        vatNumber?: string | undefined;
        mapUrl?: string | undefined;
    }, {
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        legalName: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        vatNumber?: string | undefined;
        mapUrl?: string | undefined;
    }>, {
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        legalName: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        vatNumber?: string | undefined;
        mapUrl?: string | undefined;
    }, {
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        legalName: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        vatNumber?: string | undefined;
        mapUrl?: string | undefined;
    }>;
    contactForm: z.ZodEffects<z.ZodObject<{
        enabled: z.ZodBoolean;
        leadRecipientEmail: z.ZodOptional<z.ZodString>;
        privacyConsentText: z.ZodOptional<z.ZodString>;
        privacyPolicyUrl: z.ZodOptional<z.ZodString>;
        marketingConsentEnabled: z.ZodBoolean;
        marketingConsentText: z.ZodOptional<z.ZodString>;
        phoneFieldEnabled: z.ZodBoolean;
        phoneRequired: z.ZodBoolean;
        subjectFieldEnabled: z.ZodBoolean;
        subjectOptions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        labels: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            phone: z.ZodOptional<z.ZodString>;
            subject: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        }, {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        }>>;
        messages: z.ZodOptional<z.ZodObject<{
            success: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            success?: string | undefined;
            error?: string | undefined;
        }, {
            success?: string | undefined;
            error?: string | undefined;
        }>>;
        submitButtonLabel: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        marketingConsentEnabled: boolean;
        phoneFieldEnabled: boolean;
        phoneRequired: boolean;
        subjectFieldEnabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        privacyPolicyUrl?: string | undefined;
        marketingConsentText?: string | undefined;
        subjectOptions?: {
            value: string;
        }[] | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }, {
        enabled: boolean;
        marketingConsentEnabled: boolean;
        phoneFieldEnabled: boolean;
        phoneRequired: boolean;
        subjectFieldEnabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        privacyPolicyUrl?: string | undefined;
        marketingConsentText?: string | undefined;
        subjectOptions?: {
            value: string;
        }[] | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }>, {
        enabled: boolean;
        marketingConsentEnabled: boolean;
        phoneFieldEnabled: boolean;
        phoneRequired: boolean;
        subjectFieldEnabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        privacyPolicyUrl?: string | undefined;
        marketingConsentText?: string | undefined;
        subjectOptions?: {
            value: string;
        }[] | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }, {
        enabled: boolean;
        marketingConsentEnabled: boolean;
        phoneFieldEnabled: boolean;
        phoneRequired: boolean;
        subjectFieldEnabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        privacyPolicyUrl?: string | undefined;
        marketingConsentText?: string | undefined;
        subjectOptions?: {
            value: string;
        }[] | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    organization: {
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        legalName: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        vatNumber?: string | undefined;
        mapUrl?: string | undefined;
    };
    contactForm: {
        enabled: boolean;
        marketingConsentEnabled: boolean;
        phoneFieldEnabled: boolean;
        phoneRequired: boolean;
        subjectFieldEnabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        privacyPolicyUrl?: string | undefined;
        marketingConsentText?: string | undefined;
        subjectOptions?: {
            value: string;
        }[] | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    };
}, {
    organization: {
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        legalName: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        vatNumber?: string | undefined;
        mapUrl?: string | undefined;
    };
    contactForm: {
        enabled: boolean;
        marketingConsentEnabled: boolean;
        phoneFieldEnabled: boolean;
        phoneRequired: boolean;
        subjectFieldEnabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        privacyPolicyUrl?: string | undefined;
        marketingConsentText?: string | undefined;
        subjectOptions?: {
            value: string;
        }[] | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    };
}>;
type ContactSettings = z.infer<typeof contactSettingsSchema>;
/**
 * Build a copy of `targetOrg` whose entire organization comes from `sourceOrg`
 * (the shared, language-independent source of truth), except each opening-hours
 * note (`description`), which is kept per-locale from `targetOrg`.
 * Used to fan the organization out across all locales while notes stay translatable.
 */
declare function mergeSharedOrganization(targetOrg: ContactSettings['organization'], sourceOrg: ContactSettings['organization']): ContactSettings['organization'];

declare const DEFAULT_CONTACT_SETTINGS_IT: ContactSettings;

declare const MAIN_NAV_PATHS: readonly ["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact"];
/** Old Italian segments → English-first public paths. */
declare const LEGACY_NAV_PATH_MAP: {
    readonly '/chi-siamo': "/about";
    readonly '/immobili': "/properties";
    readonly '/trova-immobile': "/property-finder";
    readonly '/tour-virtuali': "/virtual-tours";
    readonly '/vendi-con-noi': "/sell-with-us";
    readonly '/contatti': "/contact";
};
declare function normalizeNavPath(to: string): string;
declare const LEGAL_LINK_PATHS: readonly ["/privacy-policy", "/cookie-policy"];
declare const FOOTER_NAV_PATHS: readonly ["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact", "/privacy-policy", "/cookie-policy"];
type MainNavPath = (typeof MAIN_NAV_PATHS)[number];
type LegalLinkPath = (typeof LEGAL_LINK_PATHS)[number];
type FooterNavPath = (typeof FOOTER_NAV_PATHS)[number];
declare const cmsNavLinkSchema: z.ZodObject<{
    label: z.ZodString;
    to: z.ZodUnion<[z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact", "/privacy-policy", "/cookie-policy"]>, "/privacy-policy" | "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact" | "/cookie-policy", unknown>, z.ZodEffects<z.ZodString, string, string>]>;
    external: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    label: string;
    to: string;
    external?: boolean | undefined;
}, {
    label: string;
    to?: unknown;
    external?: boolean | undefined;
}>;
type CmsNavLink = z.infer<typeof cmsNavLinkSchema>;
declare const mainNavLinkSchema: z.ZodObject<{
    label: z.ZodString;
    to: z.ZodUnion<[z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact"]>, "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact", unknown>, z.ZodEffects<z.ZodString, string, string>]>;
    external: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    label: string;
    to: string;
    external?: boolean | undefined;
}, {
    label: string;
    to?: unknown;
    external?: boolean | undefined;
}>;
type MainNavLink = z.infer<typeof mainNavLinkSchema>;
declare const legalNavLinkSchema: z.ZodObject<{
    label: z.ZodString;
    to: z.ZodEnum<["/privacy-policy", "/cookie-policy"]>;
}, "strip", z.ZodTypeAny, {
    label: string;
    to: "/privacy-policy" | "/cookie-policy";
}, {
    label: string;
    to: "/privacy-policy" | "/cookie-policy";
}>;
type LegalNavLink = z.infer<typeof legalNavLinkSchema>;
declare const brandFooterVisibilitySchema: z.ZodObject<{
    name: z.ZodDefault<z.ZodBoolean>;
    tagline: z.ZodDefault<z.ZodBoolean>;
    description: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    description: boolean;
    name: boolean;
    tagline: boolean;
}, {
    description?: boolean | undefined;
    name?: boolean | undefined;
    tagline?: boolean | undefined;
}>;
type BrandFooterVisibility = z.infer<typeof brandFooterVisibilitySchema>;
declare const DEFAULT_BRAND_FOOTER_VISIBILITY: BrandFooterVisibility;
declare const brandSchema: z.ZodObject<{
    name: z.ZodString;
    tagline: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    footerVisibility: z.ZodObject<{
        name: z.ZodDefault<z.ZodBoolean>;
        tagline: z.ZodDefault<z.ZodBoolean>;
        description: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: boolean;
        name: boolean;
        tagline: boolean;
    }, {
        description?: boolean | undefined;
        name?: boolean | undefined;
        tagline?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    footerVisibility: {
        description: boolean;
        name: boolean;
        tagline: boolean;
    };
    description?: string | undefined;
    tagline?: string | undefined;
}, {
    name: string;
    footerVisibility: {
        description?: boolean | undefined;
        name?: boolean | undefined;
        tagline?: boolean | undefined;
    };
    description?: string | undefined;
    tagline?: string | undefined;
}>;
declare const headerCtaSchema: z.ZodOptional<z.ZodObject<{
    label: z.ZodString;
    to: z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact"]>, "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact", unknown>;
}, "strip", z.ZodTypeAny, {
    label: string;
    to: "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact";
}, {
    label: string;
    to?: unknown;
}>>;
declare const headerSecondaryCtaSchema: z.ZodOptional<z.ZodObject<{
    label: z.ZodString;
    to: z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact"]>, "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact", unknown>;
}, "strip", z.ZodTypeAny, {
    label: string;
    to: "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact";
}, {
    label: string;
    to?: unknown;
}>>;
declare const footerColumnSchema: z.ZodObject<{
    title: z.ZodString;
    links: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodUnion<[z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact", "/privacy-policy", "/cookie-policy"]>, "/privacy-policy" | "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact" | "/cookie-policy", unknown>, z.ZodEffects<z.ZodString, string, string>]>;
        external: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: string;
        external?: boolean | undefined;
    }, {
        label: string;
        to?: unknown;
        external?: boolean | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    title: string;
    links: {
        label: string;
        to: string;
        external?: boolean | undefined;
    }[];
}, {
    title: string;
    links: {
        label: string;
        to?: unknown;
        external?: boolean | undefined;
    }[];
}>;
declare const footerSchema: z.ZodObject<{
    columns: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        links: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            to: z.ZodUnion<[z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact", "/privacy-policy", "/cookie-policy"]>, "/privacy-policy" | "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact" | "/cookie-policy", unknown>, z.ZodEffects<z.ZodString, string, string>]>;
            external: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            to: string;
            external?: boolean | undefined;
        }, {
            label: string;
            to?: unknown;
            external?: boolean | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        title: string;
        links: {
            label: string;
            to: string;
            external?: boolean | undefined;
        }[];
    }, {
        title: string;
        links: {
            label: string;
            to?: unknown;
            external?: boolean | undefined;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    columns: {
        title: string;
        links: {
            label: string;
            to: string;
            external?: boolean | undefined;
        }[];
    }[];
}, {
    columns: {
        title: string;
        links: {
            label: string;
            to?: unknown;
            external?: boolean | undefined;
        }[];
    }[];
}>;
declare const socialLinkSchema: z.ZodObject<{
    platform: z.ZodEnum<["linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp", ...("linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp")[]]>;
    url: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    platform: "linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp";
    url: string;
}, {
    platform: "linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp";
    url: string;
}>;
type SocialLink = z.infer<typeof socialLinkSchema>;
declare const layoutSettingsSchema: z.ZodObject<{
    brand: z.ZodObject<{
        name: z.ZodString;
        tagline: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        footerVisibility: z.ZodObject<{
            name: z.ZodDefault<z.ZodBoolean>;
            tagline: z.ZodDefault<z.ZodBoolean>;
            description: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            description: boolean;
            name: boolean;
            tagline: boolean;
        }, {
            description?: boolean | undefined;
            name?: boolean | undefined;
            tagline?: boolean | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        footerVisibility: {
            description: boolean;
            name: boolean;
            tagline: boolean;
        };
        description?: string | undefined;
        tagline?: string | undefined;
    }, {
        name: string;
        footerVisibility: {
            description?: boolean | undefined;
            name?: boolean | undefined;
            tagline?: boolean | undefined;
        };
        description?: string | undefined;
        tagline?: string | undefined;
    }>;
    headerNav: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodUnion<[z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact"]>, "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact", unknown>, z.ZodEffects<z.ZodString, string, string>]>;
        external: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: string;
        external?: boolean | undefined;
    }, {
        label: string;
        to?: unknown;
        external?: boolean | undefined;
    }>, "many">;
    headerCta: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact"]>, "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact", unknown>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact";
    }, {
        label: string;
        to?: unknown;
    }>>;
    headerSecondaryCta: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact"]>, "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact", unknown>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact";
    }, {
        label: string;
        to?: unknown;
    }>>;
    footer: z.ZodObject<{
        columns: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            links: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                to: z.ZodUnion<[z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact", "/privacy-policy", "/cookie-policy"]>, "/privacy-policy" | "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact" | "/cookie-policy", unknown>, z.ZodEffects<z.ZodString, string, string>]>;
                external: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                to: string;
                external?: boolean | undefined;
            }, {
                label: string;
                to?: unknown;
                external?: boolean | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            title: string;
            links: {
                label: string;
                to: string;
                external?: boolean | undefined;
            }[];
        }, {
            title: string;
            links: {
                label: string;
                to?: unknown;
                external?: boolean | undefined;
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        columns: {
            title: string;
            links: {
                label: string;
                to: string;
                external?: boolean | undefined;
            }[];
        }[];
    }, {
        columns: {
            title: string;
            links: {
                label: string;
                to?: unknown;
                external?: boolean | undefined;
            }[];
        }[];
    }>;
    legalLinks: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodEnum<["/privacy-policy", "/cookie-policy"]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: "/privacy-policy" | "/cookie-policy";
    }, {
        label: string;
        to: "/privacy-policy" | "/cookie-policy";
    }>, "many">;
    social: z.ZodDefault<z.ZodArray<z.ZodObject<{
        platform: z.ZodEnum<["linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp", ...("linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp")[]]>;
        url: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        platform: "linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp";
        url: string;
    }, {
        platform: "linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp";
        url: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    brand: {
        name: string;
        footerVisibility: {
            description: boolean;
            name: boolean;
            tagline: boolean;
        };
        description?: string | undefined;
        tagline?: string | undefined;
    };
    headerNav: {
        label: string;
        to: string;
        external?: boolean | undefined;
    }[];
    footer: {
        columns: {
            title: string;
            links: {
                label: string;
                to: string;
                external?: boolean | undefined;
            }[];
        }[];
    };
    legalLinks: {
        label: string;
        to: "/privacy-policy" | "/cookie-policy";
    }[];
    social: {
        platform: "linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp";
        url: string;
    }[];
    headerCta?: {
        label: string;
        to: "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact";
    } | undefined;
    headerSecondaryCta?: {
        label: string;
        to: "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact";
    } | undefined;
}, {
    brand: {
        name: string;
        footerVisibility: {
            description?: boolean | undefined;
            name?: boolean | undefined;
            tagline?: boolean | undefined;
        };
        description?: string | undefined;
        tagline?: string | undefined;
    };
    headerNav: {
        label: string;
        to?: unknown;
        external?: boolean | undefined;
    }[];
    footer: {
        columns: {
            title: string;
            links: {
                label: string;
                to?: unknown;
                external?: boolean | undefined;
            }[];
        }[];
    };
    legalLinks: {
        label: string;
        to: "/privacy-policy" | "/cookie-policy";
    }[];
    headerCta?: {
        label: string;
        to?: unknown;
    } | undefined;
    headerSecondaryCta?: {
        label: string;
        to?: unknown;
    } | undefined;
    social?: {
        platform: "linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp";
        url: string;
    }[] | undefined;
}>;
type LayoutSettings = z.infer<typeof layoutSettingsSchema>;
declare const DEFAULT_LAYOUT_SETTINGS_IT: LayoutSettings;

declare const SOCIAL_PLATFORMS: readonly [{
    readonly id: "linkedin";
    readonly labelIt: "LinkedIn";
    readonly simpleIconSlug: "linkedin";
    readonly hex: "0A66C2";
    readonly path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";
}, {
    readonly id: "instagram";
    readonly labelIt: "Instagram";
    readonly simpleIconSlug: "instagram";
    readonly hex: "E4405F";
    readonly path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z";
}, {
    readonly id: "facebook";
    readonly labelIt: "Facebook";
    readonly simpleIconSlug: "facebook";
    readonly hex: "0866FF";
    readonly path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374 1.036-.374 1.868v1.277h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z";
}, {
    readonly id: "x";
    readonly labelIt: "X";
    readonly simpleIconSlug: "x";
    readonly hex: "000000";
    readonly path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z";
}, {
    readonly id: "youtube";
    readonly labelIt: "YouTube";
    readonly simpleIconSlug: "youtube";
    readonly hex: "FF0000";
    readonly path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z";
}, {
    readonly id: "tiktok";
    readonly labelIt: "TikTok";
    readonly simpleIconSlug: "tiktok";
    readonly hex: "000000";
    readonly path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z";
}, {
    readonly id: "whatsapp";
    readonly labelIt: "WhatsApp";
    readonly simpleIconSlug: "whatsapp";
    readonly hex: "25D366";
    readonly path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";
}];
type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number]['id'];
declare const SOCIAL_PLATFORM_IDS: [SocialPlatform, ...SocialPlatform[]];
declare function socialPlatformLabelIt(platform: SocialPlatform): string;
declare function socialPlatformIconSlug(platform: SocialPlatform): string;
declare function socialPlatformIcon(platform: SocialPlatform): {
    path: string;
    hex: string;
};

declare const siteSettingsSchema: z.ZodObject<{
    organization: z.ZodEffects<z.ZodObject<{
        legalName: z.ZodString;
        vatNumber: z.ZodOptional<z.ZodString>;
        email: z.ZodString;
        phone: z.ZodString;
        address: z.ZodObject<{
            street: z.ZodString;
            city: z.ZodString;
            postalCode: z.ZodString;
            country: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        }, {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        }>;
        geo: z.ZodObject<{
            latitude: z.ZodNumber;
            longitude: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            latitude: number;
            longitude: number;
        }, {
            latitude: number;
            longitude: number;
        }>;
        mapUrl: z.ZodOptional<z.ZodString>;
        openingHours: z.ZodArray<z.ZodObject<{
            dayOfWeek: z.ZodEnum<["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "PublicHolidays"]>;
            opens: z.ZodString;
            closes: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }, {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        legalName: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        vatNumber?: string | undefined;
        mapUrl?: string | undefined;
    }, {
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        legalName: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        vatNumber?: string | undefined;
        mapUrl?: string | undefined;
    }>, {
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        legalName: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        vatNumber?: string | undefined;
        mapUrl?: string | undefined;
    }, {
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        legalName: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        vatNumber?: string | undefined;
        mapUrl?: string | undefined;
    }>;
    contactForm: z.ZodEffects<z.ZodObject<{
        enabled: z.ZodBoolean;
        leadRecipientEmail: z.ZodOptional<z.ZodString>;
        privacyConsentText: z.ZodOptional<z.ZodString>;
        privacyPolicyUrl: z.ZodOptional<z.ZodString>;
        marketingConsentEnabled: z.ZodBoolean;
        marketingConsentText: z.ZodOptional<z.ZodString>;
        phoneFieldEnabled: z.ZodBoolean;
        phoneRequired: z.ZodBoolean;
        subjectFieldEnabled: z.ZodBoolean;
        subjectOptions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        labels: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            phone: z.ZodOptional<z.ZodString>;
            subject: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        }, {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        }>>;
        messages: z.ZodOptional<z.ZodObject<{
            success: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            success?: string | undefined;
            error?: string | undefined;
        }, {
            success?: string | undefined;
            error?: string | undefined;
        }>>;
        submitButtonLabel: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        marketingConsentEnabled: boolean;
        phoneFieldEnabled: boolean;
        phoneRequired: boolean;
        subjectFieldEnabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        privacyPolicyUrl?: string | undefined;
        marketingConsentText?: string | undefined;
        subjectOptions?: {
            value: string;
        }[] | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }, {
        enabled: boolean;
        marketingConsentEnabled: boolean;
        phoneFieldEnabled: boolean;
        phoneRequired: boolean;
        subjectFieldEnabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        privacyPolicyUrl?: string | undefined;
        marketingConsentText?: string | undefined;
        subjectOptions?: {
            value: string;
        }[] | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }>, {
        enabled: boolean;
        marketingConsentEnabled: boolean;
        phoneFieldEnabled: boolean;
        phoneRequired: boolean;
        subjectFieldEnabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        privacyPolicyUrl?: string | undefined;
        marketingConsentText?: string | undefined;
        subjectOptions?: {
            value: string;
        }[] | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }, {
        enabled: boolean;
        marketingConsentEnabled: boolean;
        phoneFieldEnabled: boolean;
        phoneRequired: boolean;
        subjectFieldEnabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        privacyPolicyUrl?: string | undefined;
        marketingConsentText?: string | undefined;
        subjectOptions?: {
            value: string;
        }[] | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }>;
} & {
    brand: z.ZodObject<{
        name: z.ZodString;
        tagline: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        footerVisibility: z.ZodObject<{
            name: z.ZodDefault<z.ZodBoolean>;
            tagline: z.ZodDefault<z.ZodBoolean>;
            description: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            description: boolean;
            name: boolean;
            tagline: boolean;
        }, {
            description?: boolean | undefined;
            name?: boolean | undefined;
            tagline?: boolean | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        footerVisibility: {
            description: boolean;
            name: boolean;
            tagline: boolean;
        };
        description?: string | undefined;
        tagline?: string | undefined;
    }, {
        name: string;
        footerVisibility: {
            description?: boolean | undefined;
            name?: boolean | undefined;
            tagline?: boolean | undefined;
        };
        description?: string | undefined;
        tagline?: string | undefined;
    }>;
    headerNav: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodUnion<[z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact"]>, "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact", unknown>, z.ZodEffects<z.ZodString, string, string>]>;
        external: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: string;
        external?: boolean | undefined;
    }, {
        label: string;
        to?: unknown;
        external?: boolean | undefined;
    }>, "many">;
    headerCta: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact"]>, "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact", unknown>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact";
    }, {
        label: string;
        to?: unknown;
    }>>;
    headerSecondaryCta: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact"]>, "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact", unknown>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact";
    }, {
        label: string;
        to?: unknown;
    }>>;
    footer: z.ZodObject<{
        columns: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            links: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                to: z.ZodUnion<[z.ZodEffects<z.ZodEnum<["/", "/about", "/properties", "/property-finder", "/virtual-tours", "/sell-with-us", "/contact", "/privacy-policy", "/cookie-policy"]>, "/privacy-policy" | "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact" | "/cookie-policy", unknown>, z.ZodEffects<z.ZodString, string, string>]>;
                external: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                to: string;
                external?: boolean | undefined;
            }, {
                label: string;
                to?: unknown;
                external?: boolean | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            title: string;
            links: {
                label: string;
                to: string;
                external?: boolean | undefined;
            }[];
        }, {
            title: string;
            links: {
                label: string;
                to?: unknown;
                external?: boolean | undefined;
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        columns: {
            title: string;
            links: {
                label: string;
                to: string;
                external?: boolean | undefined;
            }[];
        }[];
    }, {
        columns: {
            title: string;
            links: {
                label: string;
                to?: unknown;
                external?: boolean | undefined;
            }[];
        }[];
    }>;
    legalLinks: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodEnum<["/privacy-policy", "/cookie-policy"]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: "/privacy-policy" | "/cookie-policy";
    }, {
        label: string;
        to: "/privacy-policy" | "/cookie-policy";
    }>, "many">;
    social: z.ZodDefault<z.ZodArray<z.ZodObject<{
        platform: z.ZodEnum<["linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp", ...("linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp")[]]>;
        url: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        platform: "linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp";
        url: string;
    }, {
        platform: "linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp";
        url: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    organization: {
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        legalName: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        vatNumber?: string | undefined;
        mapUrl?: string | undefined;
    };
    contactForm: {
        enabled: boolean;
        marketingConsentEnabled: boolean;
        phoneFieldEnabled: boolean;
        phoneRequired: boolean;
        subjectFieldEnabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        privacyPolicyUrl?: string | undefined;
        marketingConsentText?: string | undefined;
        subjectOptions?: {
            value: string;
        }[] | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    };
    brand: {
        name: string;
        footerVisibility: {
            description: boolean;
            name: boolean;
            tagline: boolean;
        };
        description?: string | undefined;
        tagline?: string | undefined;
    };
    headerNav: {
        label: string;
        to: string;
        external?: boolean | undefined;
    }[];
    footer: {
        columns: {
            title: string;
            links: {
                label: string;
                to: string;
                external?: boolean | undefined;
            }[];
        }[];
    };
    legalLinks: {
        label: string;
        to: "/privacy-policy" | "/cookie-policy";
    }[];
    social: {
        platform: "linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp";
        url: string;
    }[];
    headerCta?: {
        label: string;
        to: "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact";
    } | undefined;
    headerSecondaryCta?: {
        label: string;
        to: "/" | "/about" | "/properties" | "/property-finder" | "/virtual-tours" | "/sell-with-us" | "/contact";
    } | undefined;
}, {
    organization: {
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        legalName: string;
        email: string;
        phone: string;
        address: {
            street: string;
            city: string;
            postalCode: string;
            country: string;
        };
        geo: {
            latitude: number;
            longitude: number;
        };
        vatNumber?: string | undefined;
        mapUrl?: string | undefined;
    };
    contactForm: {
        enabled: boolean;
        marketingConsentEnabled: boolean;
        phoneFieldEnabled: boolean;
        phoneRequired: boolean;
        subjectFieldEnabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        privacyPolicyUrl?: string | undefined;
        marketingConsentText?: string | undefined;
        subjectOptions?: {
            value: string;
        }[] | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
            phone?: string | undefined;
            subject?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    };
    brand: {
        name: string;
        footerVisibility: {
            description?: boolean | undefined;
            name?: boolean | undefined;
            tagline?: boolean | undefined;
        };
        description?: string | undefined;
        tagline?: string | undefined;
    };
    headerNav: {
        label: string;
        to?: unknown;
        external?: boolean | undefined;
    }[];
    footer: {
        columns: {
            title: string;
            links: {
                label: string;
                to?: unknown;
                external?: boolean | undefined;
            }[];
        }[];
    };
    legalLinks: {
        label: string;
        to: "/privacy-policy" | "/cookie-policy";
    }[];
    headerCta?: {
        label: string;
        to?: unknown;
    } | undefined;
    headerSecondaryCta?: {
        label: string;
        to?: unknown;
    } | undefined;
    social?: {
        platform: "linkedin" | "instagram" | "facebook" | "x" | "youtube" | "tiktok" | "whatsapp";
        url: string;
    }[] | undefined;
}>;
type SiteSettings = z.infer<typeof siteSettingsSchema>;
declare const DEFAULT_SITE_SETTINGS_IT: SiteSettings;
declare function mergeSiteSettingsDefaults(document: unknown): SiteSettings;

type PageKey = 'home' | 'chi-siamo' | 'immobili-index' | 'contatti' | 'property-finder' | 'virtual-tours' | 'sell-with-us' | 'privacy-policy' | 'cookie-policy';
type PageRegistryEntry = {
    allowedTypes: string[];
    reorderable: string[];
    defaults: (locale: 'it' | 'en') => CmsPageDocument;
    milestone: 'M1' | 'M2' | 'M3';
};
declare const PAGE_REGISTRY: Record<PageKey, PageRegistryEntry>;
declare const PAGE_KEYS: PageKey[];
declare function isPageKey(key: string): key is PageKey;
declare function getM1PageKeys(): PageKey[];
declare function getM2PageKeys(): PageKey[];
declare function getM3PageKeys(): PageKey[];

declare const DAY_OF_WEEK_LABELS_IT: Record<string, string>;
declare const SOCIAL_PLATFORM_LABELS_IT: Record<string, string>;
declare const FEATURED_COLLECTION_MODE_LABELS_IT: Record<string, string>;
declare const LEGAL_POLICY_SOURCE_LABELS_IT: Record<string, string>;
declare function enumLabelIt(fieldKey: string, value: string): string;

type LocaleScope = 'shared' | 'i18n';
type FieldMeta = {
    kind: 'string';
    key: string;
    label: string;
    required: boolean;
    localeScope: LocaleScope;
    maxLength?: number;
    multiline?: boolean;
    format?: 'url' | 'email' | 'time';
} | {
    kind: 'image';
    key: string;
    label: string;
    required: boolean;
    localeScope: LocaleScope;
} | {
    kind: 'number';
    key: string;
    label: string;
    required: boolean;
    localeScope: LocaleScope;
    min?: number;
    max?: number;
} | {
    kind: 'boolean';
    key: string;
    label: string;
    required: boolean;
    localeScope: LocaleScope;
} | {
    kind: 'enum';
    key: string;
    label: string;
    required: boolean;
    localeScope: LocaleScope;
    options: {
        value: string;
        label: string;
    }[];
} | {
    kind: 'object';
    key: string;
    label: string;
    required: boolean;
    localeScope: LocaleScope;
    fields: FieldMeta[];
} | {
    kind: 'array';
    key: string;
    label: string;
    required: boolean;
    localeScope: LocaleScope;
    item: FieldMeta;
    min?: number;
    max?: number;
};
declare function zodToFieldMeta(schema: ZodTypeAny, key?: string): FieldMeta[];

export { type BrandFooterVisibility, type BrandingColors, type BrandingLogos, type BrandingTypography, type CategoryShowcaseContent, type CategoryShowcaseItem, type CmsNavLink, type CmsPageDocument, type CmsSection, type ContactSettings, DAY_OF_WEEK_LABELS_IT, DEFAULT_BRANDING_COLORS, DEFAULT_BRANDING_SCALARS, DEFAULT_BRANDING_TYPOGRAPHY, DEFAULT_BRAND_FOOTER_VISIBILITY, DEFAULT_CONTACT_SETTINGS_IT, DEFAULT_LAYOUT_SETTINGS_IT, DEFAULT_OPENING_HOURS_IT, DEFAULT_SITE_SETTINGS_IT, type DayOfWeek, type DaySchedule, type DayScheduleGroup, EDITOR_DAY_ORDER, FEATURED_COLLECTION_MODE_LABELS_IT, FONT_HEADING_WHITELIST, FONT_SANS_WHITELIST, FONT_WHITELIST, FOOTER_NAV_PATHS, type FieldMeta, type FontHeading, type FontSans, type FooterNavPath, type ImageSlideshowContent, type ImageSlideshowItem, LEGACY_NAV_PATH_MAP, LEGAL_LINK_PATHS, LEGAL_POLICY_SOURCE_LABELS_IT, LOGO_SLOTS, type LayoutSettings, type LegalLinkPath, type LegalNavLink, type LocaleScope, type LogoSlot, type LogoSlotConfig, MAIN_NAV_PATHS, type MainNavLink, type MainNavPath, type OpeningHoursEntry, type OpeningHoursValidationIssue, PAGE_KEYS, PAGE_REGISTRY, type PageKey, type PageRegistryEntry, SECTION_TYPE_LABELS_IT, SOCIAL_PLATFORMS, SOCIAL_PLATFORM_IDS, SOCIAL_PLATFORM_LABELS_IT, type SectionType, type SettingsScalars, type SiteSettings, type SocialLink, type SocialPlatform, type TimeSlot, WEEKDAY_ORDER, brandFooterVisibilitySchema, brandSchema, brandingColorsSchema, brandingLogosSchema, brandingTypographySchema, categoryShowcaseContentSchema, categoryShowcaseItemSchema, cmsNavLinkSchema, cmsPageDocumentSchema, cmsSectionSchema, cmsSeoSchema, collectLogoMediaIds, collectPageMediaIds, contactFormSchema, contactSettingsSchema, cssVarsToStyleText, ctaContentSchema, ctaLinkSchema, dayOfWeekSchema, enumLabelIt, faqContentSchema, featureItemSchema, featuredCollectionContentSchema, featuresContentSchema, flattenDaySchedules, footerColumnSchema, footerSchema, getM1PageKeys, getM2PageKeys, getM3PageKeys, groupConsecutiveSchedules, groupOpeningHoursByDay, headerCtaSchema, headerSecondaryCtaSchema, heroContentSchema, hexColorSchema, imageSlideshowContentSchema, imageSlideshowItemSchema, isPageKey, layoutSettingsSchema, legalNavLinkSchema, legalPolicyContentSchema, logoAltSchema, logoSlotSchema, mainNavLinkSchema, mergeOpeningHoursNotes, mergeSharedOrganization, mergeSiteSettingsDefaults, normalizeNavPath, normalizeSettingsScalars, openingHoursSchema, optionalCtaLinkSchema, optionalMediaIdSchema, organizationSchema, pageHeaderContentSchema, parseSectionContent, richTextContentSchema, scalarsToCssVars, sectionContentByType, settingsScalarsSchema, siteSettingsSchema, socialLinkSchema, socialPlatformIcon, socialPlatformIconSlug, socialPlatformLabelIt, splitContentSchema, statsContentSchema, teamContentSchema, testimonialsContentSchema, validateOpeningHours, zodToFieldMeta };
