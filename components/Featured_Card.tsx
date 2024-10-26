import Image from "next/image"

interface FeaturedProps {
    image: string;
    title: string;
    date: string;
    tag: string;
    description: string;
}

export default function Featured_Card(props: FeaturedProps){
    return(
        <div className="featured-card">
            <div className="featured-card-image">
                <Image src={props.image} alt="featured-card" width="246" height="140"/>
            </div>
            <div className="featured-card-content">
                <h3 className="featured-card-title">{props.title}</h3>
                <p className="featured-card-date">{props.date}</p> <p className="featured-card-tag">{props.tag}</p>
                <p className="featured-card-description">{props.description}</p>
              </div>
        </div>
    )
}