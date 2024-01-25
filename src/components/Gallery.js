import ImageSlider from "./ImageSlider"

/**
 * - ImageSlider is being used on mobile instead of the images gallery.
 */

const Gallery = () => {
    return (
        <section className="Gallery section">
            <div className="container">
                <div className="content-wrapper">
                    <h2>Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.</h2>
                    <p>
                        Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae. Quisque maximus ante sapien, at pharetra sem sagittis eu. Maecenas nibh leo, interdum ac malesuada quis, tempus vel lacus.
                        <br />
                        <br />
                        Aliquam quis velit et nunc scelerisque auctor quis id lacus. Proin sem turpis, rutrum ut placerat nec, varius sit amet lacus. Praesent sed viverra lorem.
                    </p>
                </div>

                <div className="image-gallery-wrapper">
                    <div className="image image1" />
                    <div className="image image2" />
                    <div className="image image3" />
                    <div className="image image4" />
                    <div className="image image5" />
                </div>
            </div>

            <ImageSlider amountOfSlides={5} />

        </section>
    )
}

export default Gallery