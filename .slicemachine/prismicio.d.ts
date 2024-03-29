// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for About documents */
interface AboutDocumentData {
    /**
     * Introduction field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.introduction
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    introduction: prismicT.KeyTextField;
    /**
     * Biography field in *About*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.biography
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    biography: prismicT.RichTextField;
    /**
     * Picture field in *About*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about.picture
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    picture: prismicT.ImageField<never>;
    /**
     * Additional Information field in *About*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.additional_information
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    additional_information: prismicT.RichTextField;
}
/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;
/** Content for Article documents */
interface ArticleDocumentData {
    /**
     * Title field in *Article*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Display on Homepage field in *Article*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: article.display_on_homepage
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    display_on_homepage: prismicT.BooleanField;
    /**
     * Category field in *Article*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.category
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    category: prismicT.RichTextField;
    /**
     * Featured Image field in *Article*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: article.featured_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    featured_image: prismicT.ImageField<never>;
    /**
     * Cover Color field in *Article*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: article.cover_color
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    cover_color: prismicT.ColorField;
    /**
     * Goal field in *Article*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.excerpt
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    excerpt: prismicT.KeyTextField;
    /**
     * Role field in *Article*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.role
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    role: prismicT.RichTextField;
    /**
     * Team field in *Article*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.deliverables
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    deliverables: prismicT.KeyTextField;
    /**
     * Project Duration field in *Article*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.project_duration
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    project_duration: prismicT.KeyTextField;
    /**
     * Design Tools field in *Article*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: article.design_tools
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    design_tools: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Article*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: article.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ArticleDocumentDataSlicesSlice>;
}
/**
 * Slice for *Article → Slice Zone*
 *
 */
type ArticleDocumentDataSlicesSlice = TextImageSplitBlockSlice | TextOnlyBlockSlice | ImageTextSplitBlockSlice | ImageOnlyBlockSlice;
/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ArticleDocumentData>, "article", Lang>;
/** Content for Blog Page documents */
interface BlogPageDocumentData {
    /**
     * Introduction field in *Blog Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog_page.introduction
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    introduction: prismicT.KeyTextField;
}
/**
 * Blog Page document from Prismic
 *
 * - **API ID**: `blog_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<BlogPageDocumentData>, "blog_page", Lang>;
/** Content for Blog documents */
interface BlogDocumentData {
    /**
     * Title field in *Blog*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Display on Homepage field in *Blog*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: blog.display_on_homepage
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    display_on_homepage: prismicT.BooleanField;
    /**
     * Cover Image field in *Blog*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.cover_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    cover_image: prismicT.ImageField<never>;
    /**
     * Read Duration field in *Blog*
     *
     * - **Field Type**: Number
     * - **Placeholder**: Ex. 6 mins
     * - **API ID Path**: blog.read_duration
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    read_duration: prismicT.NumberField;
    /**
     * Category field in *Blog*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.category
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    category: prismicT.KeyTextField;
    /**
     * Excerpt field in *Blog*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.excerpt
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    excerpt: prismicT.RichTextField;
    /**
     * Slice Zone field in *Blog*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: blog.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<BlogDocumentDataSlicesSlice>;
}
/**
 * Slice for *Blog → Slice Zone*
 *
 */
type BlogDocumentDataSlicesSlice = ImageOnlyBlockSlice | ImageTextSplitBlockSlice | TextImageSplitBlockSlice | TextOnlyBlockSlice;
/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * Name field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Position field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.position
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    position: prismicT.KeyTextField;
    /**
     * Hero Intro field in *Homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.hero_intro
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    hero_intro: prismicT.RichTextField;
    /**
     * Hero Image field in *Homepage*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.hero_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    hero_image: prismicT.ImageField<never>;
    /**
     * Case Study Intro field in *Homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.case_study_intro
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    case_study_intro: prismicT.RichTextField;
    /**
     * Slice Zone field in *Homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = MyServicesSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Name field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Role field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.role
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    role: prismicT.KeyTextField;
    /**
     * Resume field in *Settings*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.resume
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    resume: prismicT.LinkField;
    /**
     * Email field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.email
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    email: prismicT.KeyTextField;
    /**
     * Phone field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.phone
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    phone: prismicT.KeyTextField;
    /**
     * Picture field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.picture
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    picture: prismicT.ImageField<never>;
    /**
     * Facebook field in *Settings*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.facebook
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    facebook: prismicT.LinkField;
    /**
     * LinkedIn field in *Settings*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.linkedin
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    linkedin: prismicT.LinkField;
    /**
     * Instagram field in *Settings*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.instagram
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    instagram: prismicT.LinkField;
    /**
     * Twitter field in *Settings*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.twitter
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    twitter: prismicT.LinkField;
    /**
     * Behance field in *Settings*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.behance
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    behance: prismicT.LinkField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
export type AllDocumentTypes = AboutDocument | ArticleDocument | BlogPageDocument | BlogDocument | HomepageDocument | SettingsDocument;
/**
 * Item in ImageOnlyBlock → Items
 *
 */
export interface ImageOnlyBlockSliceDefaultItem {
    /**
     * Image field in *ImageOnlyBlock → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image_only_block.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Label field in *ImageOnlyBlock → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_only_block.items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
}
/**
 * Default variation for ImageOnlyBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageOnlyBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageOnlyBlockSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<ImageOnlyBlockSliceDefaultItem>>;
/**
 * Slice variation for *ImageOnlyBlock*
 *
 */
type ImageOnlyBlockSliceVariation = ImageOnlyBlockSliceDefault;
/**
 * ImageOnlyBlock Shared Slice
 *
 * - **API ID**: `image_only_block`
 * - **Description**: `ImageOnlyBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageOnlyBlockSlice = prismicT.SharedSlice<"image_only_block", ImageOnlyBlockSliceVariation>;
/**
 * Primary content in ImageTextSplitBlock → Primary
 *
 */
interface ImageTextSplitBlockSliceDefaultPrimary {
    /**
     * Image field in *ImageTextSplitBlock → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image_text_split_block.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Image Label field in *ImageTextSplitBlock → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_text_split_block.primary.image_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    image_label: prismicT.KeyTextField;
    /**
     * Text field in *ImageTextSplitBlock → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_text_split_block.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for ImageTextSplitBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageTextSplitBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageTextSplitBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageTextSplitBlockSliceDefaultPrimary>, never>;
/**
 * Slice variation for *ImageTextSplitBlock*
 *
 */
type ImageTextSplitBlockSliceVariation = ImageTextSplitBlockSliceDefault;
/**
 * ImageTextSplitBlock Shared Slice
 *
 * - **API ID**: `image_text_split_block`
 * - **Description**: `ImageTextSplitBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageTextSplitBlockSlice = prismicT.SharedSlice<"image_text_split_block", ImageTextSplitBlockSliceVariation>;
/**
 * Item in MyServices → Items
 *
 */
export interface MyServicesSliceDefaultItem {
    /**
     * Image field in *MyServices → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: my_services.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *MyServices → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: my_services.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *MyServices → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: my_services.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
}
/**
 * Default variation for MyServices Slice
 *
 * - **API ID**: `default`
 * - **Description**: `MyServices`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MyServicesSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<MyServicesSliceDefaultItem>>;
/**
 * Slice variation for *MyServices*
 *
 */
type MyServicesSliceVariation = MyServicesSliceDefault;
/**
 * MyServices Shared Slice
 *
 * - **API ID**: `my_services`
 * - **Description**: `MyServices`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MyServicesSlice = prismicT.SharedSlice<"my_services", MyServicesSliceVariation>;
/**
 * Primary content in TextImageSplitBlock → Primary
 *
 */
interface TextImageSplitBlockSliceDefaultPrimary {
    /**
     * Text field in *TextImageSplitBlock → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_image_split_block.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Image field in *TextImageSplitBlock → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: text_image_split_block.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Image Label field in *TextImageSplitBlock → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_image_split_block.primary.image_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    image_label: prismicT.KeyTextField;
}
/**
 * Default variation for TextImageSplitBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextImageSplitBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextImageSplitBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextImageSplitBlockSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TextImageSplitBlock*
 *
 */
type TextImageSplitBlockSliceVariation = TextImageSplitBlockSliceDefault;
/**
 * TextImageSplitBlock Shared Slice
 *
 * - **API ID**: `text_image_split_block`
 * - **Description**: `TextImageSplitBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextImageSplitBlockSlice = prismicT.SharedSlice<"text_image_split_block", TextImageSplitBlockSliceVariation>;
/**
 * Primary content in TextOnlyBlock → Primary
 *
 */
interface TextOnlyBlockSliceDefaultPrimary {
    /**
     * Text field in *TextOnlyBlock → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_only_block.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for TextOnlyBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextOnlyBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextOnlyBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextOnlyBlockSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TextOnlyBlock*
 *
 */
type TextOnlyBlockSliceVariation = TextOnlyBlockSliceDefault;
/**
 * TextOnlyBlock Shared Slice
 *
 * - **API ID**: `text_only_block`
 * - **Description**: `TextOnlyBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextOnlyBlockSlice = prismicT.SharedSlice<"text_only_block", TextOnlyBlockSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AboutDocumentData, AboutDocument, ArticleDocumentData, ArticleDocumentDataSlicesSlice, ArticleDocument, BlogPageDocumentData, BlogPageDocument, BlogDocumentData, BlogDocumentDataSlicesSlice, BlogDocument, HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, SettingsDocumentData, SettingsDocument, AllDocumentTypes, ImageOnlyBlockSliceDefaultItem, ImageOnlyBlockSliceDefault, ImageOnlyBlockSliceVariation, ImageOnlyBlockSlice, ImageTextSplitBlockSliceDefaultPrimary, ImageTextSplitBlockSliceDefault, ImageTextSplitBlockSliceVariation, ImageTextSplitBlockSlice, MyServicesSliceDefaultItem, MyServicesSliceDefault, MyServicesSliceVariation, MyServicesSlice, TextImageSplitBlockSliceDefaultPrimary, TextImageSplitBlockSliceDefault, TextImageSplitBlockSliceVariation, TextImageSplitBlockSlice, TextOnlyBlockSliceDefaultPrimary, TextOnlyBlockSliceDefault, TextOnlyBlockSliceVariation, TextOnlyBlockSlice };
    }
}
