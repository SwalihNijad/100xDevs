import { Appbar } from "../components/Appbar";
import { BoardsSection } from "../components/BoardsSection";
import { Card } from "../components/Card";


export function Board() {


    const pendingTasks = [{id:"1",title:"Node to bun migration",description:"Move node.js project to bun, we have been working but not working out!"}]
    const ongoingTasks = [{id:"1",title:"Node to bun migration",description:"Move node.js project to bun, we have been working but not working out!"}]
    const doneTasks = [{id:"1",title:"Node to bun migration",description:"Move node.js project to bun, we have been working but not working out!"}]

    return (
        <div>
            <Appbar />
            <div style={{ display: "flex", padding: 30 }}>
                <BoardsSection>
                    {pendingTasks.map(task => <Card
                        key={task.id}
                        title={task.title}
                        description={task.description}
                    />)}
                </BoardsSection>
                <BoardsSection>
                    {ongoingTasks.map(task => <Card
                        key={task.id}
                        title={task.title}
                        description={task.description}
                    />)}
                </BoardsSection>
                <BoardsSection>
                    {doneTasks.map(task => <Card
                        key={task.id}
                        title={task.title}
                        description={task.description}
                    />)}
                </BoardsSection>


               
            </div>

            <div>This is a test code i have written inside the div tag</div>
        </div>
    );
}