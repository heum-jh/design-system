import React, { ChangeEvent, MouseEvent } from 'react';
export type TaskType = {
    id: string;
    title: string;
    state: "pin" | "archive" | "inbox";
}
type TaskProps = {
    task: TaskType;
    onPinTask: (id: string, state: boolean) => void;
    onArchiveTask: (id: string, state: boolean) => void;
}
export function SkeletonTask() {
    return (
        <div data-placeholder className="flex items-center gap-6 p-4 cursor-pointer">
            <div className="flex-grow-0 flex-shrink-0 w-4 basis-auto">
                <div className="w-4 h-4 border border-cyan-500 animate-pulse" />
            </div>
            <div className="flex items-center justify-between flex-1 min-w-0">
                <div className="w-3/4 h-4 rounded bg-cyan-500 animate-pulse" />
                <div className="w-4 h-4 rounded-full bg-cyan-500 animate-pulse" />
            </div>
        </div>
    );
}
export default function Task({ task, onPinTask, onArchiveTask }: TaskProps) {
    const [isArchive, setIsArchive] = React.useState(task.state === "archive");

    const handleArchiveTask = (e: ChangeEvent<HTMLInputElement>) => {
        setIsArchive(prev => !prev)
        onArchiveTask(task.id, e.currentTarget.checked);
    }
    const handlePinTask = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        onPinTask(task.id, e.currentTarget.checked);
    }

    return (
        <label className='flex items-center gap-6 p-4 cursor-pointer'>
            <div className='flex-grow-0 flex-shrink-0 basis-auto'>
                <input type="checkbox" name={task.id} className="sr-only peer" onChange={handleArchiveTask} defaultChecked={task.state === "archive"} />
                <div className='w-4 h-4 border border-cyan-500 peer-checked:bg-cyan-500 peer-checked:border-none' />
            </div>
            <div className='flex items-center justify-between flex-1 min-w-0'>
                <span className={`pr-4 text-lg truncate ${isArchive && "line-through text-slate-500"}`}>{task.title}</span>
                <label className={`cursor-pointer ${isArchive && 'hidden'}`} >
                    <input type='checkbox' className='sr-only peer' onChange={handlePinTask} defaultChecked={task.state === "pin"} />
                    <svg className={`w-4 h-4 peer-checked:fill-cyan-500 fill-transparent stroke-cyan-500`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" stroke-width="1.5"></path>
                        </g>
                    </svg>
                </label>
            </div>
        </label>
    )
}