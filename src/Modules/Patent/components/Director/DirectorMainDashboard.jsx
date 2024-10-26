import React, { useEffect, useState } from "react";
import { Grid, Container, Loader, Flex, Select, Box, Text, Divider } from "@mantine/core";
import { useDispatch } from "react-redux";
import { SortAscending } from "@phosphor-icons/react";
import CustomBreadcrumbs from "../../../../components/Breadcrumbs.jsx";
import ModuleTabs from "../../../../components/moduleTabs.jsx";
import DirectorDashboard from "./DirectorDashboard.jsx";
import RecentApplications from "./RecentApplications.jsx";
import FinalReviewApplications from "./FinalReviewApplications.jsx";
import ReviewedApplications from "./ReviewedApplications.jsx";
import ActiveApplications from "./ActiveApplications.jsx";

const categories = ["Most Recent", "Tags", "Title"];

function DirectorMainDashboard() {
  const [activeTab, setActiveTab] = useState("0");
  const [sortedBy, setSortedBy] = useState("Most Recent");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // Define your tabs here
  const tabItems = [
    { title: "Dashboard" },
    { title: "Recent Applications" },
    { title: "Final Review Applications" },
    { title: "Reviewed Applications" },
    { title: "Active Applications" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return console.error("No authentication token found!");

      try {
        setLoading(true);
        // Fetch data logic here if needed
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <CustomBreadcrumbs />
      <Flex justify="space-between" align="center" mt="lg">
        <ModuleTabs
          tabs={tabItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          badges={[]}
        />

        <Flex align="center" mt="md" rowGap="1rem" columnGap="4rem" wrap="wrap">
          <Select
            classNames={{
              option: "select-options",
              input: "select-inputs",
            }}
            variant="filled"
            leftSection={<SortAscending />}
            data={categories}
            value={sortedBy}
            onChange={setSortedBy}
            placeholder="Sort By"
          />
        </Flex>
      </Flex>

      {/* Render content based on the active tab */}
      <Grid mt="xl">
        {loading ? (
          <Container py="xl">
            <Loader size="lg" />
          </Container>
        ) : (
          <>
            {activeTab === "0" && <DirectorDashboard setActiveTab={setActiveTab}/>}
            {activeTab === "1" && <RecentApplications setActiveTab={setActiveTab}/>}
            {activeTab === "2" && <FinalReviewApplications setActiveTab={setActiveTab}/>}
            {activeTab === "3" && <ReviewedApplications setActiveTab={setActiveTab}/>}
            {activeTab === "4" && <ActiveApplications setActiveTab={setActiveTab}/>}
          </>
        )}
      </Grid>
    </>
  );
}

export default DirectorMainDashboard;