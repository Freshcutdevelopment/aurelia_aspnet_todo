using System;
using System.Collections;
using System.Collections.Generic;
using aurelia_todo.Models;
using Microsoft.AspNet.Mvc;

namespace aurelia_todo.Controllers
{
	[Route("api/[controller]")]
	public class TodoController : Controller
	{
		public IList<TodoModel> Get()
		{
			return new List<TodoModel>
			{
				new TodoModel
				{
					id = 1,
					text = "What is Aurelia?",
					created_at = new DateTime(2016, 05, 01),
					is_complete = true,
					Tags = new List<string>
					{
						"What",
						"Aurelia"
					}
				},
				new TodoModel
				{
					id = 2,
					text = "Why Aurelia?",
					created_at = new DateTime(2016, 04, 01),
					is_complete = true,
					Tags = new List<string>
					{
						"Why",
						"Aurelia"
					}
				},
				new TodoModel
				{
					id = 3,
					text = "Demo with .NET",
					created_at = new DateTime(2016, 03, 01),
					is_complete = false,
					Tags = new List<string>
					{
						"Demo",
						"Aurelia"
					}
				},
				new TodoModel
				{
					id = 4,
					text = "Questions",
					created_at = new DateTime(2016, 02, 01),
					is_complete = false,
					Tags = new List<string>
					{
						"Questions",
						"Aurelia"
					}
				},
				new TodoModel
				{
					id = 5,
					text = "Wrapping up",
					created_at = new DateTime(2016, 01, 01),
					is_complete = false,
					Tags = new List<string>
					{
						"What",
						"Aurelia"
					}
				}

			};
		}		 
	}
}