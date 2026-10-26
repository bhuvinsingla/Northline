import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
  priority?: boolean;
  captionTone?: "light" | "dark";
};

export function Photo({
  src,
  alt,
  caption,
  aspect = "aspect-[16/9]",
  priority = false,
  captionTone = "light",
}: PhotoProps) {
  return (
    <figure className="m-0">
      <div className={`relative ${aspect} overflow-hidden bg-ink`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption
          className={`mt-3 font-mono text-xs leading-relaxed ${
            captionTone === "dark" ? "text-paper/60" : "text-muted"
          }`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
