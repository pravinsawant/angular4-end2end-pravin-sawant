import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityCode'
})
export class CityCodePipe implements PipeTransform{
  transform(value: string, city : string) : string {
    return city.toUpperCase() == "PUNE" ? "020-" + value : "022-" + value;
  }
}
