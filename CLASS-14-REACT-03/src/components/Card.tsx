type CardProps = {
    title: string;
    description: string;
};

export function Card({ title, description }: CardProps) {
    return (
        <div
            style={{
                border: "1px solid #b2bec3",
                padding: 10,
                borderRadius: 10,
                cursor: "pointer",
            }}
        >
            <h3>{title}</h3>
            <div style={{ height: 1, width: "100%", background: "black" }}></div>
            <div>{description}</div>
        </div>
    );
}