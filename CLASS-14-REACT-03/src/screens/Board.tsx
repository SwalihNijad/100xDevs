import { Appbar } from "../components/Appbar";
import { Card } from "../components/Card";

export function Board() {
    return (
        <div>
            <Appbar />
            <div style={{ display: "flex", padding: 30 }}>
                <div style={{ flex: 1, borderRight: "1px dotted black", minHeight: "80vh" }}>
                    <Card
                        title="Node to bun migration"
                        description="Move node.js project to bun, we have been working but not working out!"
                    />
                </div>
                <div style={{ flex: 1, borderRight: "1px dotted black", minHeight: "80vh" }}>
                    <Card
                        title="Design review"
                        description="Review the new dashboard mockups and approve the user flow."
                    />
                </div>
                <div style={{ flex: 1, borderRight: "1px dotted black", minHeight: "80vh" }}>
                    <Card
                        title="QA checklist"
                        description="Validate the release build and capture any bugs before launch."
                    />
                </div>
            </div>
        </div>
    );
}