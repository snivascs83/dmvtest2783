import React from "react";
import Link from "next/link";
import { UrlObject } from "url";
import { replaceAllSpaces } from "../../../utils/string";

declare type TUrl = string | UrlObject;

interface IBreadcrumbItem {
  label: string;
  href?: TUrl;
  active?: boolean;
}

interface IBreadcrumbProps {
  className?: string;
  seperator?: string;
  seperatorClassName?: string;
  itemClassName?: string;
  itemActiveClassName?: string;
  items: IBreadcrumbItem[];
}

const Breadcrumb = (props: IBreadcrumbProps) => {
  return (
    <ul className={`flex ${props?.className || ""}`}>
      {props.items.map((item: IBreadcrumbItem, index: number) => {
        const href = item?.href || "";
        const activeClass = `${item?.active ? props.itemActiveClassName : ""}`;

        return (
          <React.Fragment
            key={"breadcrumbItem_" + replaceAllSpaces(item.label) + index}
          >
            <li className={`${props?.itemClassName || ""} ${activeClass}`}>
              <Link href={href} legacyBehavior>
                <a>{item.label}</a>
              </Link>
            </li>
            {props.items.length - 1 === index ? (
              <></>
            ) : (
              <li
                className={`${props?.itemClassName || ""} ${
                  props?.seperatorClassName || "mx-[5px]"
                }`}
              >
                {props.seperator}
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};
export default Breadcrumb;
