import React, { useState, useEffect } from "react";
import axios from "axios";

interface Job {
  id: number;
  title: string;
  description: string;
  tags: string[];
  stipend: string;
  duration: string;
}

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedByDate, setSortedByDate] = useState(false);

  useEffect(() => {
    axios.get("/data/jobs.json").then((response) => {
      setJobs(response.data);
    });
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedJobs = sortedByDate
    ? [...filteredJobs].sort((a, b) => a.id - b.id)
