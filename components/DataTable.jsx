"use client";
import { React, useState, useEffect, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FilterDepartment from "./FilterDepartment";
import FilterShortlisted from "./FilterShortlisted";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { Button } from "./ui/button";
import { CheckBoxComp } from "./CheckBoxComp";
import { toast } from "sonner";
import { curDate, curDay, curMonth, curYear, months, days } from "@/constants";
import { IoCloudDownloadOutline } from "react-icons/io5";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import { Input } from "@/components/ui/input";
import PaginationComp from "./PaginationComp";
import DialogComp from "./DialogComp";
import MailComposer from "./MailComposer";
import { CSVLink } from "react-csv";
import { CSV_Header } from "@/constants";

const DataTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);

  const [deptFiltered, setDeptFiltered] = useState(data);
  const [shortFiltered, setShortFiltered] = useState(data);
  const [applicantTotalCount, setApplicantTotalCount] = useState(0);
  const [shortlistedApplicantCount, setShortlistedApplicantCount] = useState(0);
  const [pipelineProcessingTick, setPipelineProcessingTick] = useState(0);
  const [filterTelemetryReport, setFilterTelemetryReport] = useState("");

  const commonElements = (arr1, arr2) => {
    let common = [];
    arr1.map((elt1) => {
      arr2.map((elt2) => {
        if (elt1 === elt2) {
          common.push(elt1);
        }
      });
    });
    return common;
  };

  const filterFunc = (dept) => {
    setDeptFiltered(data);
    const filteredData = data.filter((data) => {
      return data.Department === dept;
    });

    setDeptFiltered(filteredData);
  };

  const shortlistedFilterFunc = (status) => {
    const filteredData = data.filter((data) => {
      return String(data.shortlisted) === status;
    });

    setShortFiltered(filteredData);
  };

  useEffect(() => {
    if (deptFiltered !== data && shortFiltered !== data) {
      setTableData(commonElements(deptFiltered, shortFiltered));
    } else if (deptFiltered !== data && shortFiltered === data) {
      setTableData(deptFiltered);
    } else if (deptFiltered === data && shortFiltered !== data) {
      setTableData(shortFiltered);
    } else {
      setTableData(data);
    }
  }, [deptFiltered,