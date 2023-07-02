import DelteButton from "../DeleteButton/DeleteButton";

type TaskItemProps = {
  message: string;
  createdAt: Date;
  endsAt: Date;
  updatedAt: Date;
  groupId: number;
  completed: boolean;
  id: number;
};

const TaskItem = ({
  message,
  createdAt,
  endsAt,
  updatedAt,
  groupId,
  completed,
  id,
}: TaskItemProps) => {
  return (
    <div>
      <DelteButton />
    </div>
  );
};
