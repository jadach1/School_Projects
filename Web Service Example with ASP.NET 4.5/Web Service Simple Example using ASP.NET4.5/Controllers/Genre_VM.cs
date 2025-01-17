﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment9.Controllers
{

    public class GenreBase
    {
        [key]
        public int Id { get; set; }

        [Required, StringLength(100)]
        public string Name { get; set; }
    }
    
}
