import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { MeComponent } from './me/me.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {path:"Home", component: HomeComponent,
        title:"Home"
    },
     {path:"Education", component: EducationComponent,
        title:"Education"
    },
     {path:"Skills", component: SkillsComponent,
        title:"Skills"
    },
     {path:"Contact", component: ContactComponent,
        title:"Contact"
    },
     {path:"Me", component: MeComponent,
        title:"Me"
    },
     {path:"Projects", component: ProjectsComponent,
        title:"Projects"
    }
];
