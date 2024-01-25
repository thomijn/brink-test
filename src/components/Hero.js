import ImageSlider from "./ImageSlider"

const Hero = () => {
    return (
        <section className="Hero section">
            <div className="container">
                <p>Luctus vitae.</p>
                <h1>Utrum ut placerat nec, varius sit amet lacus.</h1>
            </div>

            <ImageSlider amountOfSlides={2} />

            <div className="images-wrapper">
                <div className="image" />
                <div className="image" />
            </div>
        </section>
    )
}

export default Hero