import * as React from 'react';
import { useState } from 'react';

/**
 * Use the Image component to show an image. This component provides additional features over a standard img tag, such as fallback images
 * and the option to hide the element if the image doesn't load.
 */
const Image: React.FC<{
  /** Alt text to be shown if the image fails to load. */
  altText: string;

  /** A CSS class to be applied to the image element. */
  className?: string;

  /** The URL of the image. */
  src: string;

  /** The URL of a fallback image to be shown if the main image doesn't load. */
  fallbackImage?: string;

  /** Whether to hide the image element if the image fails to load. */
  hideIfImageDoesNotLoad?: boolean;
}> = (props) => {
  const [hasError, setHasError] = useState(false);
  const { hideIfImageDoesNotLoad = false } = props;

  if (hasError && hideIfImageDoesNotLoad) {
    return null;
  }

  return (
    <img
      alt={props.altText}
      className={props.className}
      src={
        hasError && props.fallbackImage != null
          ? props.fallbackImage
          : props.src
      }
      onError={() => {
        setHasError(true);
      }}
    />
  );
};

export default Image;
