/**
 * - Images are put between content for mobile because the layout changes for mobile
 */

const ContentBlock = () => {
    return (
        <section className="ContentBlock">
            <div className="container">
                <div className="content-wrapper">
                    <div className="content">
                        <h2>
                            Proin enim enim, tincidunt consequat sollicitudin.
                        </h2>
                    </div>
                    <div className="content">
                        <p>
                            Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam ac. Pellentesque non augue ullamcorper arcu facilisis bibendum. Nulla quis tincidunt turpis. Sed quis erat arcu.
                        </p>
                        <div className="image mobile" />
                        <p>
                            Phasellus gravida felis quis ex mattis, sed suscipit tellus tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh vestibulum ornare. Morbi porta, enim hendrerit consectetur ultrices, libero dui ultricies libero, vel rutrum sem magna quis augue. Nulla quis magna at lorem sodales gravida.
                        </p>
                        <div className="image mobile" />
                    </div>
                </div>
                <div className="images-wrapper">
                    <div className="image-wrapper" >
                        <div className="image" />
                    </div>
                    <div className="image-wrapper" >
                        <div className="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentBlock