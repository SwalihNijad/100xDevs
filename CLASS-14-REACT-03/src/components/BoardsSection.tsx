export function BoardsSection(props) {
    return <div style={{ flex: 1, borderRight: "1px dotted Black",minHeight: "80vh"}}>
        {props.children}
    </div>
}