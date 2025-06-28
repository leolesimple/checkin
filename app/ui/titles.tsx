/**
 *
 * @param heading
 * @param tag
 * @param className
 * @constructor
 */
export function Title({
  heading,
  tag = "h1",
  className = "",
}: {
  heading: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}) {
  const Tag = tag;

  const sizeClasses = {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
  };

  return (
    <Tag className={`${sizeClasses[tag]} font-bold ${className}`}>
      {heading}
    </Tag>
  );
}

export default Title;
