using System;
using System.Collections;
using System.Collections.Generic;

namespace aurelia_todo.Models
{
	public class TodoModel
	{
		public int id { get; set; }
		public string text { get; set; }
		public IList<string> Tags { get; set; }
		public bool is_complete { get; set; }
		public DateTime created_at { get; set; }
	}
}