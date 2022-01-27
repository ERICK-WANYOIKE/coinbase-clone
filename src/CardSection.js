
import Card from "./Card"

function CardSection(props) {
    return (
        <div className="container">
            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                props.content.map(
                    (location) => {
                    return (
                        <div className="flex items-center justify-center">
                        <Card 
                            image={location.image}
                            title={location.title}
                            description={location.description}
                            buttonLabel={location.buttonLabel}
                           
                        />
                        </div>
                    )
                    }
                )
                }
            </div>
        </div>
    )
}

export default CardSection;