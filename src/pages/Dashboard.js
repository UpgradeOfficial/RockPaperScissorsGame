import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/user";
import {motion} from "framer-motion"
const Dashboard = () => {


  const {
    data: users,
  } = useQuery(["users"], getUsers, 
  {select: (data) => data.sort((a, b) => b.id - a.id),}
    );
  

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      Dashboard 
      <div>
        {users && users.map((user) => <li key={user._id}>{user.email}<li>{user.roles}</li></li>)}
        this is
      </div>
    </motion.div>
  );
};

export default Dashboard;
