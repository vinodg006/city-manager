import React from "react";
import Loadable from "react-loadable";
import Loader from "./common/components/Loader";
import appRoutes from "./common/constants/appRoutes";

const MyLoadingComponent = () => {
  return <Loader />;
};

const LoadableComponent = (loader) =>
  Loadable({
    loader,
    loading: MyLoadingComponent,
  });

const routeConfig = [
  {
    path: appRoutes.HOME,
    component: LoadableComponent(() => import("./features/home/HomeContainer")),
    isExact: true,
  },
  {
    path: appRoutes.ALL_CITIES,
    component: LoadableComponent(() =>
      import("./features/allCities/AllCitiesContainer")
    ),
    isExact: false,
  },
  {
    path: appRoutes.SHORTLISTED_CITIES,
    component: LoadableComponent(() =>
      import("./features/shortlistedCities/ShorlistedCitiesContainer")
    ),
    isExact: true,
  },
];

export default routeConfig;
