import * as zod from 'zod';
import { z, ZodTypeAny } from 'zod';

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
    cta: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: string;
    }, {
        label: string;
        to: string;
    }>>;
    image: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    subtitle?: string | undefined;
    cta?: {
        label: string;
        to: string;
    } | undefined;
    image?: string | undefined;
}, {
    title: string;
    subtitle?: string | undefined;
    cta?: {
        label: string;
        to: string;
    } | undefined;
    image?: string | undefined;
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
    image: z.ZodString;
    imageAlt: z.ZodOptional<z.ZodString>;
    reverse: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    image: string;
    body: string;
    reverse?: boolean | undefined;
    imageAlt?: string | undefined;
}, {
    title: string;
    image: string;
    body: string;
    reverse?: boolean | undefined;
    imageAlt?: string | undefined;
}>;
declare const teamContentSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    role: z.ZodString;
    bio: z.ZodString;
    image: z.ZodString;
}, "strip", z.ZodTypeAny, {
    image: string;
    name: string;
    role: string;
    bio: string;
    title?: string | undefined;
}, {
    image: string;
    name: string;
    role: string;
    bio: string;
    title?: string | undefined;
}>;
declare const statsContentSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        value: z.ZodNumber;
        suffix: z.ZodOptional<z.ZodString>;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        value: number;
        suffix?: string | undefined;
    }, {
        label: string;
        value: number;
        suffix?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        label: string;
        value: number;
        suffix?: string | undefined;
    }[];
}, {
    items: {
        label: string;
        value: number;
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

declare const sectionContentByType: {
    readonly hero: zod.ZodObject<{
        title: zod.ZodString;
        subtitle: zod.ZodOptional<zod.ZodString>;
        cta: zod.ZodOptional<zod.ZodObject<{
            label: zod.ZodString;
            to: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            label: string;
            to: string;
        }, {
            label: string;
            to: string;
        }>>;
        image: zod.ZodOptional<zod.ZodString>;
    }, "strip", zod.ZodTypeAny, {
        title: string;
        subtitle?: string | undefined;
        cta?: {
            label: string;
            to: string;
        } | undefined;
        image?: string | undefined;
    }, {
        title: string;
        subtitle?: string | undefined;
        cta?: {
            label: string;
            to: string;
        } | undefined;
        image?: string | undefined;
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
        image: zod.ZodString;
        imageAlt: zod.ZodOptional<zod.ZodString>;
        reverse: zod.ZodOptional<zod.ZodBoolean>;
    }, "strip", zod.ZodTypeAny, {
        title: string;
        image: string;
        body: string;
        reverse?: boolean | undefined;
        imageAlt?: string | undefined;
    }, {
        title: string;
        image: string;
        body: string;
        reverse?: boolean | undefined;
        imageAlt?: string | undefined;
    }>;
    readonly team: zod.ZodObject<{
        title: zod.ZodOptional<zod.ZodString>;
        name: zod.ZodString;
        role: zod.ZodString;
        bio: zod.ZodString;
        image: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        image: string;
        name: string;
        role: string;
        bio: string;
        title?: string | undefined;
    }, {
        image: string;
        name: string;
        role: string;
        bio: string;
        title?: string | undefined;
    }>;
    readonly stats: zod.ZodObject<{
        items: zod.ZodArray<zod.ZodObject<{
            value: zod.ZodNumber;
            suffix: zod.ZodOptional<zod.ZodString>;
            label: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            label: string;
            value: number;
            suffix?: string | undefined;
        }, {
            label: string;
            value: number;
            suffix?: string | undefined;
        }>, "many">;
    }, "strip", zod.ZodTypeAny, {
        items: {
            label: string;
            value: number;
            suffix?: string | undefined;
        }[];
    }, {
        items: {
            label: string;
            value: number;
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
        image?: string | undefined;
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
        lead?: string | undefined;
    } | {
        body: string;
    } | {
        source: "manual" | "iubenda";
        body?: string | undefined;
        iubendaPolicyId?: string | undefined;
    } | {
        image: string;
        name: string;
        role: string;
        bio: string;
        title?: string | undefined;
    } | {
        items: {
            label: string;
            value: number;
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
declare const organizationSchema: z.ZodObject<{
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
    openingHours: {
        dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
        opens: string;
        closes: string;
        description?: string | undefined;
    }[];
    vatNumber?: string | undefined;
}, {
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
    openingHours: {
        dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
        opens: string;
        closes: string;
        description?: string | undefined;
    }[];
    vatNumber?: string | undefined;
}>;
declare const contactFormSchema: z.ZodEffects<z.ZodObject<{
    enabled: z.ZodBoolean;
    leadRecipientEmail: z.ZodOptional<z.ZodString>;
    privacyConsentText: z.ZodOptional<z.ZodString>;
    labels: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        message: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        message?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    }, {
        message?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
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
    leadRecipientEmail?: string | undefined;
    privacyConsentText?: string | undefined;
    labels?: {
        message?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    } | undefined;
    messages?: {
        success?: string | undefined;
        error?: string | undefined;
    } | undefined;
    submitButtonLabel?: string | undefined;
}, {
    enabled: boolean;
    leadRecipientEmail?: string | undefined;
    privacyConsentText?: string | undefined;
    labels?: {
        message?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    } | undefined;
    messages?: {
        success?: string | undefined;
        error?: string | undefined;
    } | undefined;
    submitButtonLabel?: string | undefined;
}>, {
    enabled: boolean;
    leadRecipientEmail?: string | undefined;
    privacyConsentText?: string | undefined;
    labels?: {
        message?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    } | undefined;
    messages?: {
        success?: string | undefined;
        error?: string | undefined;
    } | undefined;
    submitButtonLabel?: string | undefined;
}, {
    enabled: boolean;
    leadRecipientEmail?: string | undefined;
    privacyConsentText?: string | undefined;
    labels?: {
        message?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    } | undefined;
    messages?: {
        success?: string | undefined;
        error?: string | undefined;
    } | undefined;
    submitButtonLabel?: string | undefined;
}>;
declare const contactSettingsSchema: z.ZodObject<{
    organization: z.ZodObject<{
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
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        vatNumber?: string | undefined;
    }, {
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
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        vatNumber?: string | undefined;
    }>;
    contactForm: z.ZodEffects<z.ZodObject<{
        enabled: z.ZodBoolean;
        leadRecipientEmail: z.ZodOptional<z.ZodString>;
        privacyConsentText: z.ZodOptional<z.ZodString>;
        labels: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        }, {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
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
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }, {
        enabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }>, {
        enabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }, {
        enabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    organization: {
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
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        vatNumber?: string | undefined;
    };
    contactForm: {
        enabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    };
}, {
    organization: {
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
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        vatNumber?: string | undefined;
    };
    contactForm: {
        enabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    };
}>;
type ContactSettings = z.infer<typeof contactSettingsSchema>;
declare const settingsScalarsSchema: z.ZodObject<{
    themeColor: z.ZodString;
    backgroundColor: z.ZodString;
}, "strip", z.ZodTypeAny, {
    themeColor: string;
    backgroundColor: string;
}, {
    themeColor: string;
    backgroundColor: string;
}>;
type SettingsScalars = z.infer<typeof settingsScalarsSchema>;
declare const DEFAULT_CONTACT_SETTINGS_IT: ContactSettings;

declare const cmsNavLinkSchema: z.ZodObject<{
    label: z.ZodString;
    to: z.ZodUnion<[z.ZodEnum<["/", "/chi-siamo", "/immobili", "/articoli", "/contatti", "/privacy-policy", "/cookie-policy"]>, z.ZodString]>;
    external: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    label: string;
    to: string;
    external?: boolean | undefined;
}, {
    label: string;
    to: string;
    external?: boolean | undefined;
}>;
type CmsNavLink = z.infer<typeof cmsNavLinkSchema>;
declare const brandSchema: z.ZodObject<{
    name: z.ZodString;
    shortName: z.ZodString;
    tagline: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    shortName: string;
    description?: string | undefined;
    tagline?: string | undefined;
}, {
    name: string;
    shortName: string;
    description?: string | undefined;
    tagline?: string | undefined;
}>;
declare const headerCtaSchema: z.ZodOptional<z.ZodObject<{
    label: z.ZodString;
    to: z.ZodEnum<["/", "/chi-siamo", "/immobili", "/articoli", "/contatti", "/privacy-policy", "/cookie-policy"]>;
}, "strip", z.ZodTypeAny, {
    label: string;
    to: "/" | "/chi-siamo" | "/immobili" | "/articoli" | "/contatti" | "/privacy-policy" | "/cookie-policy";
}, {
    label: string;
    to: "/" | "/chi-siamo" | "/immobili" | "/articoli" | "/contatti" | "/privacy-policy" | "/cookie-policy";
}>>;
declare const footerColumnSchema: z.ZodObject<{
    title: z.ZodString;
    links: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodUnion<[z.ZodEnum<["/", "/chi-siamo", "/immobili", "/articoli", "/contatti", "/privacy-policy", "/cookie-policy"]>, z.ZodString]>;
        external: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: string;
        external?: boolean | undefined;
    }, {
        label: string;
        to: string;
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
        to: string;
        external?: boolean | undefined;
    }[];
}>;
declare const footerSchema: z.ZodObject<{
    columns: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        links: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            to: z.ZodUnion<[z.ZodEnum<["/", "/chi-siamo", "/immobili", "/articoli", "/contatti", "/privacy-policy", "/cookie-policy"]>, z.ZodString]>;
            external: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            to: string;
            external?: boolean | undefined;
        }, {
            label: string;
            to: string;
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
            to: string;
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
            to: string;
            external?: boolean | undefined;
        }[];
    }[];
}>;
declare const socialLinkSchema: z.ZodObject<{
    platform: z.ZodEnum<["linkedin", "instagram", "facebook", "x"]>;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    platform: "linkedin" | "instagram" | "facebook" | "x";
    url: string;
}, {
    platform: "linkedin" | "instagram" | "facebook" | "x";
    url: string;
}>;
declare const layoutSettingsSchema: z.ZodObject<{
    brand: z.ZodObject<{
        name: z.ZodString;
        shortName: z.ZodString;
        tagline: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        shortName: string;
        description?: string | undefined;
        tagline?: string | undefined;
    }, {
        name: string;
        shortName: string;
        description?: string | undefined;
        tagline?: string | undefined;
    }>;
    headerNav: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodUnion<[z.ZodEnum<["/", "/chi-siamo", "/immobili", "/articoli", "/contatti", "/privacy-policy", "/cookie-policy"]>, z.ZodString]>;
        external: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: string;
        external?: boolean | undefined;
    }, {
        label: string;
        to: string;
        external?: boolean | undefined;
    }>, "many">;
    headerCta: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodEnum<["/", "/chi-siamo", "/immobili", "/articoli", "/contatti", "/privacy-policy", "/cookie-policy"]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: "/" | "/chi-siamo" | "/immobili" | "/articoli" | "/contatti" | "/privacy-policy" | "/cookie-policy";
    }, {
        label: string;
        to: "/" | "/chi-siamo" | "/immobili" | "/articoli" | "/contatti" | "/privacy-policy" | "/cookie-policy";
    }>>;
    footer: z.ZodObject<{
        columns: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            links: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                to: z.ZodUnion<[z.ZodEnum<["/", "/chi-siamo", "/immobili", "/articoli", "/contatti", "/privacy-policy", "/cookie-policy"]>, z.ZodString]>;
                external: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                to: string;
                external?: boolean | undefined;
            }, {
                label: string;
                to: string;
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
                to: string;
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
                to: string;
                external?: boolean | undefined;
            }[];
        }[];
    }>;
    legalLinks: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodUnion<[z.ZodEnum<["/", "/chi-siamo", "/immobili", "/articoli", "/contatti", "/privacy-policy", "/cookie-policy"]>, z.ZodString]>;
        external: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: string;
        external?: boolean | undefined;
    }, {
        label: string;
        to: string;
        external?: boolean | undefined;
    }>, "many">;
    social: z.ZodDefault<z.ZodArray<z.ZodObject<{
        platform: z.ZodEnum<["linkedin", "instagram", "facebook", "x"]>;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        platform: "linkedin" | "instagram" | "facebook" | "x";
        url: string;
    }, {
        platform: "linkedin" | "instagram" | "facebook" | "x";
        url: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    brand: {
        name: string;
        shortName: string;
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
        to: string;
        external?: boolean | undefined;
    }[];
    social: {
        platform: "linkedin" | "instagram" | "facebook" | "x";
        url: string;
    }[];
    headerCta?: {
        label: string;
        to: "/" | "/chi-siamo" | "/immobili" | "/articoli" | "/contatti" | "/privacy-policy" | "/cookie-policy";
    } | undefined;
}, {
    brand: {
        name: string;
        shortName: string;
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
        to: string;
        external?: boolean | undefined;
    }[];
    headerCta?: {
        label: string;
        to: "/" | "/chi-siamo" | "/immobili" | "/articoli" | "/contatti" | "/privacy-policy" | "/cookie-policy";
    } | undefined;
    social?: {
        platform: "linkedin" | "instagram" | "facebook" | "x";
        url: string;
    }[] | undefined;
}>;
type LayoutSettings = z.infer<typeof layoutSettingsSchema>;
declare const DEFAULT_LAYOUT_SETTINGS_IT: LayoutSettings;

declare const siteSettingsSchema: z.ZodObject<{
    organization: z.ZodObject<{
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
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        vatNumber?: string | undefined;
    }, {
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
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        vatNumber?: string | undefined;
    }>;
    contactForm: z.ZodEffects<z.ZodObject<{
        enabled: z.ZodBoolean;
        leadRecipientEmail: z.ZodOptional<z.ZodString>;
        privacyConsentText: z.ZodOptional<z.ZodString>;
        labels: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        }, {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
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
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }, {
        enabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }>, {
        enabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    }, {
        enabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
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
        shortName: z.ZodString;
        tagline: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        shortName: string;
        description?: string | undefined;
        tagline?: string | undefined;
    }, {
        name: string;
        shortName: string;
        description?: string | undefined;
        tagline?: string | undefined;
    }>;
    headerNav: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodUnion<[z.ZodEnum<["/", "/chi-siamo", "/immobili", "/articoli", "/contatti", "/privacy-policy", "/cookie-policy"]>, z.ZodString]>;
        external: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: string;
        external?: boolean | undefined;
    }, {
        label: string;
        to: string;
        external?: boolean | undefined;
    }>, "many">;
    headerCta: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodEnum<["/", "/chi-siamo", "/immobili", "/articoli", "/contatti", "/privacy-policy", "/cookie-policy"]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: "/" | "/chi-siamo" | "/immobili" | "/articoli" | "/contatti" | "/privacy-policy" | "/cookie-policy";
    }, {
        label: string;
        to: "/" | "/chi-siamo" | "/immobili" | "/articoli" | "/contatti" | "/privacy-policy" | "/cookie-policy";
    }>>;
    footer: z.ZodObject<{
        columns: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            links: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                to: z.ZodUnion<[z.ZodEnum<["/", "/chi-siamo", "/immobili", "/articoli", "/contatti", "/privacy-policy", "/cookie-policy"]>, z.ZodString]>;
                external: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                to: string;
                external?: boolean | undefined;
            }, {
                label: string;
                to: string;
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
                to: string;
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
                to: string;
                external?: boolean | undefined;
            }[];
        }[];
    }>;
    legalLinks: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        to: z.ZodUnion<[z.ZodEnum<["/", "/chi-siamo", "/immobili", "/articoli", "/contatti", "/privacy-policy", "/cookie-policy"]>, z.ZodString]>;
        external: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        to: string;
        external?: boolean | undefined;
    }, {
        label: string;
        to: string;
        external?: boolean | undefined;
    }>, "many">;
    social: z.ZodDefault<z.ZodArray<z.ZodObject<{
        platform: z.ZodEnum<["linkedin", "instagram", "facebook", "x"]>;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        platform: "linkedin" | "instagram" | "facebook" | "x";
        url: string;
    }, {
        platform: "linkedin" | "instagram" | "facebook" | "x";
        url: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    organization: {
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
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        vatNumber?: string | undefined;
    };
    contactForm: {
        enabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    };
    brand: {
        name: string;
        shortName: string;
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
        to: string;
        external?: boolean | undefined;
    }[];
    social: {
        platform: "linkedin" | "instagram" | "facebook" | "x";
        url: string;
    }[];
    headerCta?: {
        label: string;
        to: "/" | "/chi-siamo" | "/immobili" | "/articoli" | "/contatti" | "/privacy-policy" | "/cookie-policy";
    } | undefined;
}, {
    organization: {
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
        openingHours: {
            dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "PublicHolidays";
            opens: string;
            closes: string;
            description?: string | undefined;
        }[];
        vatNumber?: string | undefined;
    };
    contactForm: {
        enabled: boolean;
        leadRecipientEmail?: string | undefined;
        privacyConsentText?: string | undefined;
        labels?: {
            message?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        messages?: {
            success?: string | undefined;
            error?: string | undefined;
        } | undefined;
        submitButtonLabel?: string | undefined;
    };
    brand: {
        name: string;
        shortName: string;
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
        to: string;
        external?: boolean | undefined;
    }[];
    headerCta?: {
        label: string;
        to: "/" | "/chi-siamo" | "/immobili" | "/articoli" | "/contatti" | "/privacy-policy" | "/cookie-policy";
    } | undefined;
    social?: {
        platform: "linkedin" | "instagram" | "facebook" | "x";
        url: string;
    }[] | undefined;
}>;
type SiteSettings = z.infer<typeof siteSettingsSchema>;
declare const DEFAULT_SITE_SETTINGS_IT: SiteSettings;
declare function mergeSiteSettingsDefaults(document: unknown): SiteSettings;

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
    enabled: boolean;
    id: string;
    order: number;
    content: Record<string, unknown>;
}, {
    type: string;
    enabled: boolean;
    id: string;
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
        enabled: boolean;
        id: string;
        order: number;
        content: Record<string, unknown>;
    }, {
        type: string;
        enabled: boolean;
        id: string;
        order: number;
        content: Record<string, unknown>;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    sections: {
        type: string;
        enabled: boolean;
        id: string;
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
        enabled: boolean;
        id: string;
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

type PageKey = 'home' | 'chi-siamo' | 'immobili-index' | 'articoli-index' | 'contatti' | 'privacy-policy' | 'cookie-policy';
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

type FieldMeta = {
    kind: 'string';
    key: string;
    label: string;
    required: boolean;
    maxLength?: number;
    multiline?: boolean;
    format?: 'url' | 'email';
} | {
    kind: 'number';
    key: string;
    label: string;
    required: boolean;
    min?: number;
    max?: number;
} | {
    kind: 'boolean';
    key: string;
    label: string;
    required: boolean;
} | {
    kind: 'enum';
    key: string;
    label: string;
    required: boolean;
    options: {
        value: string;
        label: string;
    }[];
} | {
    kind: 'object';
    key: string;
    label: string;
    required: boolean;
    fields: FieldMeta[];
} | {
    kind: 'array';
    key: string;
    label: string;
    required: boolean;
    item: FieldMeta;
    min?: number;
    max?: number;
};
declare function zodToFieldMeta(schema: ZodTypeAny, key?: string): FieldMeta[];

export { type CmsNavLink, type CmsPageDocument, type CmsSection, type ContactSettings, DEFAULT_CONTACT_SETTINGS_IT, DEFAULT_LAYOUT_SETTINGS_IT, DEFAULT_SITE_SETTINGS_IT, type FieldMeta, type LayoutSettings, PAGE_KEYS, PAGE_REGISTRY, type PageKey, type PageRegistryEntry, type SectionType, type SettingsScalars, type SiteSettings, brandSchema, cmsNavLinkSchema, cmsPageDocumentSchema, cmsSectionSchema, cmsSeoSchema, contactFormSchema, contactSettingsSchema, ctaContentSchema, ctaLinkSchema, faqContentSchema, featureItemSchema, featuredCollectionContentSchema, featuresContentSchema, footerColumnSchema, footerSchema, getM1PageKeys, getM2PageKeys, getM3PageKeys, headerCtaSchema, heroContentSchema, isPageKey, layoutSettingsSchema, legalPolicyContentSchema, mergeSiteSettingsDefaults, openingHoursSchema, organizationSchema, pageHeaderContentSchema, parseSectionContent, richTextContentSchema, sectionContentByType, settingsScalarsSchema, siteSettingsSchema, socialLinkSchema, splitContentSchema, statsContentSchema, teamContentSchema, testimonialsContentSchema, zodToFieldMeta };
