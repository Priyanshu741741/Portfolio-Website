declare module "*.png" {
  const content: { src: string; height: number; width: number; blurDataURL?: string };
  export default content;
}
declare module "*.jpg" {
  const content: { src: string; height: number; width: number; blurDataURL?: string };
  export default content;
}
declare module "*.jpeg" {
  const content: { src: string; height: number; width: number; blurDataURL?: string };
  export default content;
}
declare module "*.webp" {
  const content: { src: string; height: number; width: number; blurDataURL?: string };
  export default content;
}
declare module "*.ico" {
  const content: { src: string; height: number; width: number };
  export default content;
}
declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.pdf" {
  const content: string;
  export default content;
}
