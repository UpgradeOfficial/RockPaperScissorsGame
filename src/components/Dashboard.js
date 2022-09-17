import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers } from "../api/user";
const Dashboard = () => {


  const {
    isLoading,
    isError,
    error,
    data: users,
  } = useQuery(["users"], getUsers, 
  {select: (data) => data.sort((a, b) => b.id - a.id),}
    );
  

  return (
    <div>
      Dashboard 
      <div>
        {users && users.map((user) => <li key={user._id}>{user.email}<li>{user.roles}</li></li>)}
        this is
      </div>
    </div>
  );
};

export default Dashboard;
