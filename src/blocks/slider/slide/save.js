import { InnerBlocks, useBlockProps } from "@wordpress/block-editor"

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
  const blockProps = useBlockProps.save({
    className: "swiper-slide"
  })

  return (
    <div {...blockProps}>
      <div className="wp-block-dev-slider__container">
        <div className="wp-block-dev-slider__content">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  )
}
