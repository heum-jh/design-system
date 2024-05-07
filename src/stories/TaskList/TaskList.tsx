
import React from 'react';
import Task, { SkeletonTask, TaskType } from './Task';
type TaskListProps = {
    loading?: boolean;
    tasks: TaskType[];
    onPinTask: (id: string, state: boolean) => void;
    onArchiveTask: (id: string) => void;
};
export default function TaskList({ loading = false, tasks, onPinTask, onArchiveTask }: TaskListProps) {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    if (loading) {
        return <div className="flex flex-col w-full max-w-screen-lg bg-white divide-y-[1px] divide-cyan-100">
            {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonTask key={i} />
            ))}
        </div>
    }

    if (tasks.length === 0) {
        return <div className="min-h-[365px] h-full flex flex-col w-full max-w-screen-lg bg-white shadow-lg justify-center items-center">
            <img className="w-[150px] aspect-square" src="https://static.vecteezy.com/system/resources/previews/007/746/386/large_2x/still-empty-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" alt="empty" />
            <h1 className='text-3xl text-slate-500'>리스트가 비어있습니다.</h1>
        </div>;
    }

    return (
        <div className="flex flex-col w-full max-w-screen-lg bg-white divide-y-[1px] divide-cyan-100">
            {tasks.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    );
}
