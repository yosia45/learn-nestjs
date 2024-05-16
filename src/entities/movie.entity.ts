import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Movies' })
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  synopsis: string;

  @Column()
  trailerUrl: string;

  @Column()
  imgUrl: string;

  @Column()
  rating: number;

  @Column()
  genreId: number;

  @Column()
  authorId: number;
}
