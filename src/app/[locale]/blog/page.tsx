"use client";
import { useI18n } from "@/components/locales/client";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import SectionWrapper from "@/components/wrappers/SectionWrapper";
import React from "react";
import BlogCard from "@/components/blog/BlogCard";
import { BreadcrumbBaseTwo } from "@/components/widgets/BreadcrumbBaseTwo";

export default function BlogHomePage() {
  const t = useI18n();

  const blogListData = [
    {
      dateTime: "2024-06-28",
      dateTimeYear: "2024",
      dateTimeMonthDay: "Jun 28",
      imageUrl:
        "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      imageAlt: "",
      title: "Finding the right guitar for your style - 5 tips",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
      button: "Read Blog",
      link: "#",
    },
    {
      dateTime: "2024-06-28",
      dateTimeYear: "2024",
      dateTimeMonthDay: "Jun 28",
      imageUrl:
        "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      imageAlt: "",
      title: "Finding the right guitar for your style - 5 tips",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
      button: "Read Blog",
      link: "#",
    },
    {
      dateTime: "2024-06-28",
      dateTimeYear: "2024",
      dateTimeMonthDay: "Jun 28",
      imageUrl:
        "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      imageAlt: "",
      title: "Finding the right guitar for your style - 5 tips",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
      button: "Read Blog",
      link: "#",
    },
  ];
  const breadcrumbData = {
    first: {
      name: "Home",
      link: "/",
    },
    second: {
      name: "Blog",
      link: "/blog",
    },
  };

  return (
    <MaxWidthWrapper className="max-w-screen-2xl">
      {/* Heading Section */}
      <SectionWrapper className="ml-0 space-y-2 sm:ml-1 sm:space-y-5">
        <div className="ml-1 sm:ml-2 lg:ml-3">
          <BreadcrumbBaseTwo breadcrumbData={breadcrumbData} />
        </div>
        <h1 className="max-w-screen-md text-start text-4xl font-bold sm:text-7xl">
          {t("blog.homepage.h1")}
        </h1>
        <p className="max-w-screen-lg text-start">{t("blog.homepage.text")}</p>
      </SectionWrapper>
      {/* Blogs Cards */}
      <SectionWrapper className="pt-1 md:pt-2 lg:pt-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {blogListData.map((blogCardData, index) => (
            <div key={index}>
              <BlogCard blogCardData={blogCardData} />
            </div>
          ))}
        </div>
      </SectionWrapper>
      {/* Pagination */}
      {/* <div>pageination</div> */}
    </MaxWidthWrapper>
  );
}
