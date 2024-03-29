export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      approved_paper: {
        Row: {
          abstract: string | null
          categories: Json | null
          citation_count: number | null
          download_count: number | null
          keywords: Json | null
          paper_id: string
          published_at: string
          title: string | null
        }
        Insert: {
          abstract?: string | null
          categories?: Json | null
          citation_count?: number | null
          download_count?: number | null
          keywords?: Json | null
          paper_id?: string
          published_at?: string
          title?: string | null
        }
        Update: {
          abstract?: string | null
          categories?: Json | null
          citation_count?: number | null
          download_count?: number | null
          keywords?: Json | null
          paper_id?: string
          published_at?: string
          title?: string | null
        }
        Relationships: []
      }
      author: {
        Row: {
          author_id: string
          author_type: string | null
          created_at: string
          person_id: string | null
        }
        Insert: {
          author_id?: string
          author_type?: string | null
          created_at?: string
          person_id?: string | null
        }
        Update: {
          author_id?: string
          author_type?: string | null
          created_at?: string
          person_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "author_person_id_fkey"
            columns: ["person_id"]
            isOneToOne: false
            referencedRelation: "person"
            referencedColumns: ["person_id"]
          }
        ]
      }
      author_old: {
        Row: {
          author_id: string
          contact_num: string | null
          created_at: string
          email: string | null
          first_name: string | null
          last_name: string | null
          middle_name: string | null
        }
        Insert: {
          author_id?: string
          contact_num?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          last_name?: string | null
          middle_name?: string | null
        }
        Update: {
          author_id?: string
          contact_num?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          last_name?: string | null
          middle_name?: string | null
        }
        Relationships: []
      }
      author_paper_table: {
        Row: {
          author_id: string | null
          author_paper_id: string
          created_at: string
          paper_id: string | null
        }
        Insert: {
          author_id?: string | null
          author_paper_id?: string
          created_at?: string
          paper_id?: string | null
        }
        Update: {
          author_id?: string | null
          author_paper_id?: string
          created_at?: string
          paper_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "author_paper_table_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "author"
            referencedColumns: ["author_id"]
          },
          {
            foreignKeyName: "author_paper_table_paper_id_fkey"
            columns: ["paper_id"]
            isOneToOne: false
            referencedRelation: "approved_paper"
            referencedColumns: ["paper_id"]
          }
        ]
      }
      author_paper_table_old: {
        Row: {
          author_id: string | null
          author_paper_id: string
          paper_id: string | null
        }
        Insert: {
          author_id?: string | null
          author_paper_id?: string
          paper_id?: string | null
        }
        Update: {
          author_id?: string | null
          author_paper_id?: string
          paper_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "author_paper_table_old_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "author_old"
            referencedColumns: ["author_id"]
          },
          {
            foreignKeyName: "author_paper_table_old_paper_id_fkey"
            columns: ["paper_id"]
            isOneToOne: false
            referencedRelation: "published_old_paper"
            referencedColumns: ["id"]
          }
        ]
      }
      classes: {
        Row: {
          class_code: string | null
          class_id: string | null
          class_name: string | null
          department: string | null
          semester: string | null
        }
        Insert: {
          class_code?: string | null
          class_id?: string | null
          class_name?: string | null
          department?: string | null
          semester?: string | null
        }
        Update: {
          class_code?: string | null
          class_id?: string | null
          class_name?: string | null
          department?: string | null
          semester?: string | null
        }
        Relationships: []
      }
      colleges: {
        Row: {
          college_code: string | null
          college_color: string | null
          college_dean: string | null
          college_desc: string | null
          college_id: number
          college_logo_name: string | null
          college_name: string | null
        }
        Insert: {
          college_code?: string | null
          college_color?: string | null
          college_dean?: string | null
          college_desc?: string | null
          college_id?: number
          college_logo_name?: string | null
          college_name?: string | null
        }
        Update: {
          college_code?: string | null
          college_color?: string | null
          college_dean?: string | null
          college_desc?: string | null
          college_id?: number
          college_logo_name?: string | null
          college_name?: string | null
        }
        Relationships: []
      }
      courses: {
        Row: {
          college_id: number | null
          course_code: string | null
          course_id: number
          course_major: string | null
          course_name: string | null
        }
        Insert: {
          college_id?: number | null
          course_code?: string | null
          course_id?: number
          course_major?: string | null
          course_name?: string | null
        }
        Update: {
          college_id?: number | null
          course_code?: string | null
          course_id?: number
          course_major?: string | null
          course_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "courses_college_id_fkey"
            columns: ["college_id"]
            isOneToOne: false
            referencedRelation: "colleges"
            referencedColumns: ["college_id"]
          }
        ]
      }
      enrollment_table: {
        Row: {
          enrollment_date: string | null
          enrollment_id: string
          student_id: string | null
        }
        Insert: {
          enrollment_date?: string | null
          enrollment_id?: string
          student_id?: string | null
        }
        Update: {
          enrollment_date?: string | null
          enrollment_id?: string
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "enrollment_table_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "student"
            referencedColumns: ["student_id"]
          }
        ]
      }
      faculty: {
        Row: {
          college_id: number | null
          faculty_id: string
          person_id: string | null
        }
        Insert: {
          college_id?: number | null
          faculty_id?: string
          person_id?: string | null
        }
        Update: {
          college_id?: number | null
          faculty_id?: string
          person_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "faculty_college_id_fkey"
            columns: ["college_id"]
            isOneToOne: false
            referencedRelation: "colleges"
            referencedColumns: ["college_id"]
          },
          {
            foreignKeyName: "faculty_person_id_fkey"
            columns: ["person_id"]
            isOneToOne: false
            referencedRelation: "person"
            referencedColumns: ["person_id"]
          }
        ]
      }
      keywords: {
        Row: {
          id: number
          keyword: string | null
          paper_id: string | null
        }
        Insert: {
          id?: number
          keyword?: string | null
          paper_id?: string | null
        }
        Update: {
          id?: number
          keyword?: string | null
          paper_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "keywords_paper_id_fkey"
            columns: ["paper_id"]
            isOneToOne: false
            referencedRelation: "published_old_paper"
            referencedColumns: ["id"]
          }
        ]
      }
      person: {
        Row: {
          contact_number: string | null
          created_at: string
          date_of_birth: string | null
          email: string | null
          first_name: string | null
          gender: boolean | null
          last_name: string | null
          middle_name: string | null
          person_id: string
          role: string | null
        }
        Insert: {
          contact_number?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          first_name?: string | null
          gender?: boolean | null
          last_name?: string | null
          middle_name?: string | null
          person_id?: string
          role?: string | null
        }
        Update: {
          contact_number?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          first_name?: string | null
          gender?: boolean | null
          last_name?: string | null
          middle_name?: string | null
          person_id?: string
          role?: string | null
        }
        Relationships: []
      }
      published_old_paper: {
        Row: {
          abstract: string | null
          course_id: number | null
          department_id: number | null
          file_path: string | null
          id: string
          publication_date: string
          title: string | null
          year_id: number | null
        }
        Insert: {
          abstract?: string | null
          course_id?: number | null
          department_id?: number | null
          file_path?: string | null
          id?: string
          publication_date?: string
          title?: string | null
          year_id?: number | null
        }
        Update: {
          abstract?: string | null
          course_id?: number | null
          department_id?: number | null
          file_path?: string | null
          id?: string
          publication_date?: string
          title?: string | null
          year_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "published_old_paper_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["course_id"]
          },
          {
            foreignKeyName: "published_old_paper_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "colleges"
            referencedColumns: ["college_id"]
          },
          {
            foreignKeyName: "published_old_paper_year_id_fkey"
            columns: ["year_id"]
            isOneToOne: false
            referencedRelation: "school_year"
            referencedColumns: ["year_id"]
          }
        ]
      }
      school_year: {
        Row: {
          end_date: string | null
          start_date: string | null
          year_id: number
        }
        Insert: {
          end_date?: string | null
          start_date?: string | null
          year_id?: number
        }
        Update: {
          end_date?: string | null
          start_date?: string | null
          year_id?: number
        }
        Relationships: []
      }
      student: {
        Row: {
          block: string | null
          college_id: number | null
          course_id: number | null
          created_at: string
          person_id: string | null
          student_id: string
          year_level: number | null
        }
        Insert: {
          block?: string | null
          college_id?: number | null
          course_id?: number | null
          created_at?: string
          person_id?: string | null
          student_id?: string
          year_level?: number | null
        }
        Update: {
          block?: string | null
          college_id?: number | null
          course_id?: number | null
          created_at?: string
          person_id?: string | null
          student_id?: string
          year_level?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "student_college_id_fkey"
            columns: ["college_id"]
            isOneToOne: false
            referencedRelation: "colleges"
            referencedColumns: ["college_id"]
          },
          {
            foreignKeyName: "student_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["course_id"]
          },
          {
            foreignKeyName: "student_person_id_fkey"
            columns: ["person_id"]
            isOneToOne: false
            referencedRelation: "person"
            referencedColumns: ["person_id"]
          }
        ]
      }
      submitted_paper_comments: {
        Row: {
          comment_id: string
          comment_owner: string | null
          comments: string | null
          created_at: string
          file_path: string | null
          sub_paper_id: string | null
        }
        Insert: {
          comment_id?: string
          comment_owner?: string | null
          comments?: string | null
          created_at?: string
          file_path?: string | null
          sub_paper_id?: string | null
        }
        Update: {
          comment_id?: string
          comment_owner?: string | null
          comments?: string | null
          created_at?: string
          file_path?: string | null
          sub_paper_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "submitted_paper_comments_comment_owner_fkey"
            columns: ["comment_owner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submitted_paper_comments_sub_paper_id_fkey"
            columns: ["sub_paper_id"]
            isOneToOne: false
            referencedRelation: "submitted_papers"
            referencedColumns: ["review_id"]
          }
        ]
      }
      submitted_papers: {
        Row: {
          abstract: string | null
          author_id: string | null
          file_path: string | null
          keywords: Json | null
          review_id: string
          status: string | null
          submission_date: string
          title: string | null
        }
        Insert: {
          abstract?: string | null
          author_id?: string | null
          file_path?: string | null
          keywords?: Json | null
          review_id?: string
          status?: string | null
          submission_date?: string
          title?: string | null
        }
        Update: {
          abstract?: string | null
          author_id?: string | null
          file_path?: string | null
          keywords?: Json | null
          review_id?: string
          status?: string | null
          submission_date?: string
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "submitted_papers_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "author"
            referencedColumns: ["author_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
