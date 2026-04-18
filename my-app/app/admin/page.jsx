import React from "react";

//Application component
import ApplicationList from "./admincomponent/ApplicationList";

function Admin() {
    return (
        <div className="admin-panel">
            <ApplicationList />
            {/* <ApplicationDetail /> */}
        </div>
    )
}

export default Admin;