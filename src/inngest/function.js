// src/inngest/functions.ts
import { inngest } from "./client";
import Sandbox from '@e2b/code-interpreter';


export const processTask = inngest.createFunction(
    { id: "process-task", triggers: { event: "app/task.created" } },
    async ({ event, step }) => {


        const sandBoxId = await step.run('get-sandbox-id' , async()=>{
            const sandbox = await Sandbox.create("v0-clone");
            return sandbox.sandboxId ; 
        });

        const sandboxUrl = await step.run('get-sandbox-url' , async()=>{
            const sandbox = await Sandbox.connect(sandBoxId);
            const host = sandbox.getHost(3000);

            return `http://${host}`
        })


        const result = await step.run("handle-task", async () => {
            return { processed: true, id: event.data.id };
        });

        await step.sleep("pause", "1s");

        return { message: `Task ${event.data.id} complete`, result };
    }
);