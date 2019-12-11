import React from "react";
import { Skeleton } from "antd";


function AppSkeleton() {
  return (
    <div className="app-skeleton-holder">
      <div>
        <div className="d-flex align-items-center mx-5 py-3">
          <Skeleton className="app-skeleton" paragraph={false} title={{ width: 200 }}/>
          <Skeleton className="app-skeleton right" paragraph={{ rows: 1, width: "100%" }}/>
        </div>

        <Skeleton className="mt-5 app-skeleton-content"/>
      </div>

      <Skeleton className="app-skeleton-footer" title={{ width: "20%" }} paragraph={{ width: ["50%", "50%", "10%"] }}/>
    </div>
  )
}

export default AppSkeleton;
