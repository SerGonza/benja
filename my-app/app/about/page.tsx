import React from "react";
import { title } from "@/components/primitives";
import {calendar} from "@nextui-org/react";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About</h1>
			<calendar 
      			aria-label="Date (Read Only)" 
     			 value={today(getLocalTimeZone())} 
      			isReadOnly 
  		 	 />
		</div>
	);
}

