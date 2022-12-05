export interface CreateSubjectDto {
  gradeId: string;
  stageId: string;
  subjectName: string;
  // subjectImage: FormFile;
  index: number;
  subjectSections: CreateSubjectSectionDto[];
  subjectBranches: CreateSubjectBranchDto[];
  subjectMzhbs: CreateSubjectMzhbDto[];
}
export interface FormFile {
  contentType: string;
  contentDisposition: string;
  headers: HeaderDictionary;
  length: number;
  name: string;
  fileName: string;
}
export interface HeaderDictionary {
  contentLength: number | null;
}
export interface CreateSubjectSectionDto {
  sectionId: string;
}

export interface CreateSubjectBranchDto {
  branchId: string;
}

export interface CreateSubjectMzhbDto {
  mzhbId: string;
}
