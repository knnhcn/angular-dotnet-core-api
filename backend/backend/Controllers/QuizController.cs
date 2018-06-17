using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using backend.data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Quiz")]
    public class QuizController : Controller
    {
        readonly QuizContext context;
        public QuizController(QuizContext context)
        {
            this.context = context;
        }

        // GET api/quiz
        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            return this.context.Questions.AsEnumerable();
            //return new Models.Question[] {
            //    new Models.Question() { Text = "Hello from backend!"}
            //};
        }

        // POST api/quiz
        [HttpPost]
        public Models.Question Post([FromBody]Models.Question question)
        {
            // Simulate request duration by waiting for 2 seconds, can be removed!
            Thread.Sleep(2000);

            // If needed, sanity check.
            question.Text += " [modified by backend and returned!]";

            this.context.Add(question);
            this.context.SaveChanges();

            return question;
        }

    }


}