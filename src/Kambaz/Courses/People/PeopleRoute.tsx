import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PeopleTable from "./Table";
import * as client from "../client";

export default function PeopleRoute() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    if (cid) {
      client.findUsersForCourse(cid).then(setUsers);
    }
  }, [cid]);

  return <PeopleTable users={users} />;
}
