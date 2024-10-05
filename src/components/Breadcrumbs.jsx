import { Breadcrumbs, Text } from "@mantine/core";
import { CaretRight } from "@phosphor-icons/react";
import classes from "../Modules/Dashboard/Dashboard.module.css";
import { useSelector } from "react-redux";

const CustomBreadcrumbs = () => {
  const currentModule = useSelector((state) => state.module.current_module);
  const items = [{ title: currentModule }].map((item, index) => (
    <Text key={index} className={classes.fusionText} fw={600}>
      {item.title}
    </Text>
  ))

  return (
    <>
      <Breadcrumbs
        separator={
          <CaretRight className={classes.fusionCaretIcon} weight="bold" />
        }
        mt="xs"
        ml={{ md: "lg" }}
      >
        {items}
      </Breadcrumbs>
    </>
  );
};

export default CustomBreadcrumbs;