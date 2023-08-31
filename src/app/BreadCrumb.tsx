'use client'
// AutoBreadcrumbs.tsx
import React from "react";
import { Breadcrumbs as MuiBreadcrumbs, Link } from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation"; // Import useNavigation


interface AutoBreadcrumbsProps {
  fullUrl: string; // Pass the full URL of the page
}

const AutoBreadcrumbs: React.FC<AutoBreadcrumbsProps> = ({ fullUrl }) => {
  const navigation = usePathname();
  const pathParts = fullUrl.split("/").filter((part) => part);
  const breadcrumbs = pathParts.map((part, index) => {
    const breadcrumb = {
      label: part.replace(/-/g, " "), // Convert hyphens to spaces
      href: `/${pathParts.slice(0, index + 1).join("/")}`,
    };
    return breadcrumb;
  });

  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      <NextLink href="/" passHref>
        <Link color="inherit">Home</Link>
      </NextLink>
      {breadcrumbs.map((breadcrumb) => (
        <NextLink href={breadcrumb.href} key={breadcrumb.label} passHref>
          <Link color="inherit">{breadcrumb.label}</Link>
        </NextLink>
      ))}
    </MuiBreadcrumbs>
  );
};

export default AutoBreadcrumbs;
