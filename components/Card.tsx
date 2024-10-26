interface CardProps {
    title: string;
    date: string;
    tag: string;
    description: string;
}

export default function Card(props: CardProps){
    return(
        <div>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <div>
                        <h6 className="card-date">{props.date}</h6>
                        <span> | </span>
                        <h6 className="card-tag">{props.tag}</h6>
                    </div>
                    <p className="card-description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}