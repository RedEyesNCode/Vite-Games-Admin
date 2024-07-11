import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../../api/apiInterface";
import AppUsersTable from "../AppUsersTable";

function AppUserComponent() {
  return (
    <div className="h-full overflow-auto">
      <AppUsersTable />
    </div>
  );
}

export default AppUserComponent;
